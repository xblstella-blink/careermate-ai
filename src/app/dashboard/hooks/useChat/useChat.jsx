import { useCallback, useRef, useState } from "react";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef(null);

  const send = useCallback(
    async (userText) => {
      const text = userText.trim();
      if (!text || isStreaming) return;

      // 在 setMessages 前先构建 API 用的 history（避免 stale closure）
      const historyForApi = [
        ...messages
          .filter((m) => m.status === "done")
          .map(({ role, content }) => ({ role, content })),
        { role: "user", content: text },
      ];

      const assistantId = crypto.randomUUID();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "user",
          content: text,
          status: "done",
        },
        {
          id: assistantId,
          role: "assistant",
          content: "",
          status: "streaming",
        },
      ]);

      setIsStreaming(true);
      const ac = new AbortController();
      abortRef.current = ac;

      try {
        const token = localStorage.getItem("token");

        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_AUTH_API}/chat/stream`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ messages: historyForApi }),
            signal: ac.signal,
          },
        );

        if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);

        const reader = resp.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buf = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buf += decoder.decode(value, { stream: true });
          const frames = buf.split("\n\n");
          buf = frames.pop() ?? "";

          for (const frame of frames) {
            const parsed = parseFrame(frame);
            if (!parsed) continue;

            if (parsed.event === "delta") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: m.content + parsed.data.text }
                    : m,
                ),
              );
            } else if (parsed.event === "done") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, status: "done" } : m,
                ),
              );
            } else if (parsed.event === "error") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, status: "error" } : m,
                ),
              );
            }
          }
        }
      } catch (err) {
        const status = err.name === "AbortError" ? "aborted" : "error";
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, status } : m)),
        );
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, isStreaming],
  );

  const abort = useCallback(() => abortRef.current?.abort(), []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
  }, []);

  return { messages, isStreaming, send, abort, reset };
};

// SSE 帧解析：从 "event: delta\ndata: {...}" 中提取 event + data
function parseFrame(raw) {
  const frame = raw.trim();
  if (!frame) return null;
  let event = "message";
  const dataLines = [];
  for (const line of frame.split("\n")) {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    else if (line.startsWith("data:")) dataLines.push(line.slice(5).trim());
  }
  if (!dataLines.length) return null;
  try {
    return { event, data: JSON.parse(dataLines.join("\n")) };
  } catch {
    return null;
  }
}

export default useChat;

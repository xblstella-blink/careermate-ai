import { useState } from "react";

const ChatInput = ({ onSend, onStop, isStreaming }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || isStreaming) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="py-4">
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <textarea
            rows={2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask CareerMate AI..."
            className="flex-1 resize-none bg-transparent text-sm outline-none max-h-32 min-h-[60px] "
          />
          <button
            onClick={isStreaming ? onStop : handleSend}
            className={`shrink-0 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
              isStreaming
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
            }`}
            disabled={!isStreaming && !value.trim()}
          >
            {isStreaming ? "Stop" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;

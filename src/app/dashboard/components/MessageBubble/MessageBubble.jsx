const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
        } ${message.status === "streaming" ? "animate-pulse" : ""}`}
      >
        {message.content || (message.status === "streaming" ? "▍" : "")}
        {message.status === "error" && (
          <span className="block text-xs text-red-400 mt-1">
            Something went wrong
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;

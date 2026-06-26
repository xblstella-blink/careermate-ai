"use client";

import AppShell from "@/app/components/AppShell";
import WelcomeView from "./components/WelcomeView";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import ResumeSection from "./components/ResumeSection";
import useChat from "./hooks/useChat";

const DashboardPage = () => {
  const { messages, isStreaming, send, abort } = useChat();

  return (
    <AppShell sidebar={<ResumeSection />}>
      <div className="flex flex-col h-full">
        {messages.length === 0 ? (
          <WelcomeView />
        ) : (
          <MessageList messages={messages} />
        )}
        <ChatInput onSend={send} onStop={abort} isStreaming={isStreaming} />
      </div>
    </AppShell>
  );
};

export default DashboardPage;

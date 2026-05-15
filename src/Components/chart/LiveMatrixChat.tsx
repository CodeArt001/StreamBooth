import { useEffect, useState, useRef } from "react";

interface ChatMessage {
  id: string;
  user: string;
  text: string;
  colorClass: string;
}

const USER_POOL = [
  "USER_101",
  "VIEWER_X",
  "USER_048",
  "ALPHA_CMD",
  "MOD_PRIME",
  "NET_DIRECTOR",
  "SYS_NODE_7",
];
const MESSAGE_POOL = [
  "Latency drop to 12ms.",
  "This UI is insane.",
  "Signal strength looks optimal here.",
  "Initiate sequence override.",
  "Protocol accepted.",
  "Cross-platform stream matrix synced.",
  "Hype matrix breaching limits! 🚀",
  "Zero copyright risk checked. Clean load.",
  "Command studio feeds running at 60 FPS.",
];
const COLOR_POOL = [
  "text-[#FFB800]",
  "text-[#FFFFFF]",
  "text-[#00F5FF]",
  "text-[#7B61FF]",
];

export const LiveMatrixChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      user: "USER_101",
      text: "Latency drop to 12ms.",
      colorClass: "text-[#FFB800]",
    },
    {
      id: "2",
      user: "VIEWER_X",
      text: "This UI is insane.",
      colorClass: "text-[#FFFFFF]",
    },
    {
      id: "3",
      user: "USER_048",
      text: "Signal strength looks optimal here.",
      colorClass: "text-[#FFB800]",
    },
    {
      id: "4",
      user: "ALPHA_CMD",
      text: "Initiate sequence override.",
      colorClass: "text-[#FFFFFF]",
    },
    {
      id: "5",
      user: "MOD_PRIME",
      text: "Protocol accepted.",
      colorClass: "text-[#00F5FF]",
    },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  // Auto scroll logic to lock the viewport at the bottom as new elements arrive
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // Simulated rapid live stream metadata stream feed
  useEffect(() => {
    const interval = setInterval(() => {
      const newMsg: ChatMessage = {
        id: Math.random().toString(36),
        user: USER_POOL[Math.floor(Math.random() * USER_POOL.length)],
        text: MESSAGE_POOL[Math.floor(Math.random() * MESSAGE_POOL.length)],
        colorClass: COLOR_POOL[Math.floor(Math.random() * COLOR_POOL.length)],
      };

      setMessages((prev) => {
        const keeps = prev.slice(-30); // Cap history to prevent DOM memory leaks
        return [...keeps, newMsg];
      });
    }, 1500); // New chat message line interval speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[320px] bg-[#0d0d1a] border border-white/20 rounded-xl p-5 flex flex-col justify-between overflow-hidden">
      {/* 📡 Terminal Section Layout Header */}
      <div className="mb-4">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#888899]">
          LIVE_MATRIX_CHAT
        </span>
      </div>

      {/* 📜 Auto-Scrolling Real-Time Text Canvas Grid */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="font-mono text-[14px] leading-relaxed tracking-wide animate-fadeIn"
          >
            <span className={`${msg.colorClass} font-bold mr-2`}>
              {msg.user}:
            </span>
            <span className="text-[#FFFFFF]/90">{msg.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMatrixChat;

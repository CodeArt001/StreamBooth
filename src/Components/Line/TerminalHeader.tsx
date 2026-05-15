interface TerminalHeaderProps {
  className?: string;
}

export const TerminalHeader = ({ className = "" }: TerminalHeaderProps) => {
  return (
    <div
      /* 🟢 Explicit w-full + flex + justify-between to force extreme left/right distribution */
      className={`w-full bg-[#27262D] h-9 border-b border-black/40 flex items-center justify-between px-4 select-none ${className}`}
    >
      {/* 🔴 🟡 🔵 Left Side Nodes */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="w-2.5 h-2.5 rounded-sm bg-[#FF4444] shadow-[0_0_6px_rgba(255,68,68,0.3)]" />
        <span className="w-2.5 h-2.5 rounded-sm bg-[#FFB800] shadow-[0_0_6px_rgba(255,184,0,0.3)]" />
        <span className="w-2.5 h-2.5 rounded-sm bg-[#00F5FF] shadow-[0_0_6px_rgba(0,245,255,0.3)]" />
      </div>

      {/* 📟 Right Side Metadata String (Pushed precisely to the right end) */}
      <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-[#888899] shrink-0 text-right">
        <span>STREAMBOOTH</span>
        <span className="text-white/20">//</span>
        <span>TERMINAL 01</span>
        <span className="text-white/20">//</span>
        <span>STATUS:</span>
        <span className="text-[#00F5FF] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.4)] animate-pulse">
          OPTIMIZED
        </span>
      </div>
    </div>
  );
};

export default TerminalHeader;

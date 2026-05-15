import { useEffect, useState } from "react";

interface SentimentChartProps {
  className?: string;
}

export const SentimentChart = ({ className = "" }: SentimentChartProps) => {
  // Simulated changing live metrics data loop
  const [heights, setHeights] = useState([40, 65, 55, 85, 95, 75]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prev) =>
        prev.map((h) => {
          const change = Math.floor(Math.random() * 21) - 10; // Shifting values up/down (-10 to +10)
          return Math.max(30, Math.min(100, h + change)); // Clamped securely inside bounds
        }),
      );
    }, 450); // Fluid breathing speed interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full bg-[#0d0d1a] border border-white/20 rounded-xl p-5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] transition-all duration-300 ${className}`}
    >
      {/* 🔴 Top Dashboard Header Metadata Row */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#888899]">
          SENTIMET_FLOW
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] animate-pulse shadow-[0_0_8px_#00F5FF]" />
          <span className="font-mono text-xs font-bold text-[#00F5FF] tracking-wider">
            LIVE
          </span>
        </div>
      </div>

      {/* 📊 High Fidelity Cyberpunk Bar Array Canvas */}
      <div className="h-40 w-full relative">
        <svg
          className="w-full h-full"
          viewBox="0 0 340 120"
          preserveAspectRatio="none"
        >
          <defs>
            {/* The Cyan Cyberpunk Linear Mask Gradient */}
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#00A2FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00F5FF" stopOpacity="0.03" />
            </linearGradient>

            {/* Neon Accent Base Glow Filter Definition */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dynamic Vector Rectangles */}
          {heights.map((height, index) => {
            const barWidth = 44;
            const horizontalGap = 12;
            const xPosition = index * (barWidth + horizontalGap);
            const yPosition = 120 - height;

            return (
              <rect
                key={index}
                x={xPosition}
                y={yPosition}
                width={barWidth}
                height={height}
                fill="url(#barGradient)"
                rx="4" /* Creates smooth rounded capsule edges */
                className="transition-all duration-500 ease-out"
                style={{
                  filter: "drop-shadow(0px 0px 8px rgba(0, 245, 255, 0.3))",
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* 🔢 Isolated Real-Time Metric Display Counter */}
      <div className="mt-5 pt-3 border-t border-[#1a1a2e]/40 flex items-baseline">
        <span className="font-mono text-5xl font-bold tracking-tight text-[#00F5FF] drop-shadow-[0_0_20px_rgba(0,245,255,0.4)] animate-pulse">
          94.2
        </span>
        <span className="font-mono text-2xl font-bold text-[#00F5FF] ml-1 opacity-90">
          %
        </span>
      </div>
    </div>
  );
};

export default SentimentChart;

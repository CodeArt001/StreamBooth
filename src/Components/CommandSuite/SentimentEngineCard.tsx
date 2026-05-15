import React from "react";
import BaseModuleCard from "./BaseModuleCard";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

export const SentimentEngineCard: React.FC = () => {
  return (
    <BaseModuleCard
      tagCode="REG_SYS_02"
      icon={
        <svg
          className="w-5 h-5 text-[#FFB800]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      }
    >
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <div>
          <TitleText
            text="SENTIMENT ENGINE"
            size="text-xl"
            weight="font-bold"
            className="font-display tracking-wide uppercase mb-2"
          />
          <DescriptionText
            text="Real-time emotional tracking of your audience. Adjust your content on the fly based on the pulse of the digital collective."
            size="text-[16px]"
            className="font-body leading-relaxed text-[#888899]"
          />
        </div>

        {/* Interactive Horizontal Meter Tracker Block */}
        <div className="w-full bg-[#0a0a12] border border-white/20 rounded p-4 flex items-center justify-end relative h-12 overflow-hidden mt-4">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FFB800]/10 to-[#00F5FF]/30 w-[92%] border-r border-[#00F5FF]/50" />
          <div className="z-10 text-right pr-2">
            <TitleText
              text="92%"
              size="text-xs"
              weight="font-bold"
              color="text-[#00F5FF]"
              className="font-mono inline-block mr-1 font-display"
            />
            <TitleText
              text="POSITIVE"
              size="text-[10px]"
              weight="font-black"
              color="text-[#00F5FF]"
              className="font-mono inline-block tracking-wider font-display"
            />
          </div>
        </div>
      </div>
    </BaseModuleCard>
  );
};

export default SentimentEngineCard;

import React from "react";
import BaseModuleCard from "./BaseModuleCard";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

export const PollBattlesCard: React.FC = () => {
  return (
    <BaseModuleCard
      tagCode="REG_SYS_03"
      icon={
        <svg
          className="w-5 h-5 text-[#7B61FF]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      }
    >
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <div>
          <TitleText
            text="POLL BATTLES"
            size="text-xl"
            weight="font-bold"
            className="font-display tracking-wide uppercase mb-2"
          />
          <DescriptionText
            text="Gamified engagement modules that turn your viewers into active participants in the broadcast narrative via massive voting structures."
            size="text-[16px]"
            className="font-body leading-relaxed text-[#888899]"
          />
        </div>

        {/* System Outbound Voting Container Row */}
        <div className="w-full bg-[#0a0a12] border border-white/20 rounded h-10 flex items-center justify-between px-4 font-mono text-[10px] relative overflow-hidden mt-4">
          <div className="absolute inset-y-0 left-0 bg-[#7B61FF]/10 w-[64%]" />
          <DescriptionText
            text="OPTION_A: OVERDRIVE"
            color="text-white/70"
            className="z-10 font-bold font-display"
          />
          <TitleText
            text="64%"
            color="text-[#7B61FF]"
            className="z-10 font-black font-display"
          />
        </div>
      </div>
    </BaseModuleCard>
  );
};

export default PollBattlesCard;

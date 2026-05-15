import React from "react";
import BaseModuleCard from "./BaseModuleCard";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

export const DirectorHotkeysCard: React.FC = () => {
  return (
    <BaseModuleCard
      tagCode="REG_SYS_04"
      icon={
        <svg
          className="w-5 h-5 text-[#FF4444]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      }
    >
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <div>
          <TitleText
            text="DIRECTOR HOTKEYS"
            size="text-xl"
            weight="font-bold"
            className="font-display tracking-wide uppercase mb-2"
          />
          <DescriptionText
            text="Instant control over scenes, transitions, and overlays. A programmable tactile interface mapped to your unique workflow."
            size="text-[16px]"
            className="font-body leading-relaxed text-[#888899]"
          />
        </div>

        {/* 4-Column Tactile Operational Layout Grid */}
        <div className="grid grid-cols-4 gap-3 w-full mt-4">
          {["F1", "F2", "F3", "F4"].map((key, index) => (
            <div
              key={key}
              className={`h-16 rounded border flex flex-col items-center justify-center transition-all duration-300
                ${
                  index === 0
                    ? "border-[#FF4444] bg-[#FF4444]/5 shadow-[0_0_15px_rgba(255,68,68,0.15)]"
                    : "border-[#1a1a2e] bg-[#0a0a12]"
                }`}
            >
              <TitleText
                text={key}
                size="text-xs"
                weight="font-bold"
                color={index === 0 ? "text-[#FF4444]" : "text-[#444455]"}
                className="font-body"
              />
            </div>
          ))}
        </div>
      </div>
    </BaseModuleCard>
  );
};

export default DirectorHotkeysCard;

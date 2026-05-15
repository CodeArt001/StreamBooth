import React from "react";
import BaseModuleCard from "./BaseModuleCard";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

export const ChatMatrixCard: React.FC = () => {
  return (
    <BaseModuleCard
      tagCode="REG_SYS_01"
      icon={
        <svg
          className="w-5 h-5 text-[#00F5FF]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      }
    >
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <div>
          <TitleText
            text="CHAT MATRIX"
            size="text-xl"
            weight="font-bold"
            className="font-display tracking-wide uppercase mb-2"
          />
          <DescriptionText
            text="A hyper-threaded communication engine that clusters millions of messages into actionable data streams using semantic heatmaps."
            size="text-[16px]"
            className="font-body leading-relaxed text-[#888899]"
          />
        </div>

        {/* Live Terminal Streaming View Code Block */}
        <div className="bg-[#0a0a12] border border-white/20 rounded p-4 font-mono text-[11px] space-y-1.5 leading-normal mt-4">
          <div>
            <span className="text-[#00F5FF] font-bold font-display">
              USER_048:
            </span>{" "}
            <span className="text-white/80 font-body">
              Signal strength looks optimal here.
            </span>
          </div>
          <div>
            <span className="text-[#7B61FF] font-bold">ALPHA_CMD:</span>{" "}
            <span className="text-white/80 font-body">
              Initiate sequence override.
            </span>
          </div>
        </div>
      </div>
    </BaseModuleCard>
  );
};

export default ChatMatrixCard;

import ChatMatrixCard from "./ChatMatrixCard";
import DirectionHotkeysCard from "./DirectionHotkeysCard";
import PollBattlesCard from "./PollBattleCard";
import { SentimentEngineCard } from "./SentimentEngineCard";

export const CommandModuleSuite: React.FC = () => {
  return (
    <div className="w-full bg-[#030308] py-20 px-6 w-full mx-auto flex flex-col gap-8">
      {/* Subsection Section Banner Header */}
      <div className="flex flex-col gap-2 self-start pb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-[2px] bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#00F5FF]">
            COMMAND.MODULE.SUITE
          </span>
        </div>
        <div className="w-48 h-[1px] bg-[#1a1a2e]" />
      </div>

      {/* Balanced 2x2 Feature Distribution Grid Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <ChatMatrixCard />
        <SentimentEngineCard />
        <PollBattlesCard />
        <DirectionHotkeysCard />
      </div>
    </div>
  );
};

export default CommandModuleSuite;

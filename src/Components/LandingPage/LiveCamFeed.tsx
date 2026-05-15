import React, { useEffect, useState } from "react";
import Box from "../BoxModel/Box";
import SentimentChart from "../chart/SentimentChart";
import LiveMatrixChat from "../chart/LiveMatrixChat";
import Divider from "../Line/Divider";
import TerminalHeader from "../Line/TerminalHeader";
import studio from "../../assets/images/studio.png";

interface NetworkRelayNode {
  id: string;
  label: string;
  platform: string;
  status: "ROUTING" | "STABLE" | "MAX_HYPE";
  color: string;
}

export const LiveCamFeed: React.FC = () => {
  const [uptime, setUptime] = useState<string>("00:00:00:00");

  // Real-time system uptime simulation loop
  useEffect(() => {
    let frames = 0;
    let secs = 42;
    let mins = 18;
    let hrs = 0;

    const interval = setInterval(() => {
      frames += 4;
      if (frames >= 100) {
        frames = 0;
        secs++;
      }
      if (secs >= 60) {
        secs = 0;
        mins++;
      }
      if (mins >= 60) {
        mins = 0;
        hrs++;
      }

      const format = (num: number) => num.toString().padStart(2, "0");
      setUptime(
        `${format(hrs)}:${format(mins)}:${format(secs)}:${format(frames)}`,
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const dataNodes: NetworkRelayNode[] = [
    {
      id: "NODE_YOUTUBE",
      label: "DATA_RELAY_IN",
      platform: "YOUTUBE_LIVE",
      status: "ROUTING",
      color: "#FF4444",
    },
    {
      id: "NODE_TWITCH",
      label: "METADATA_STREAM",
      platform: "TWITCH_CORE",
      status: "STABLE",
      color: "#7B61FF",
    },
    {
      id: "NODE_TIKTOK",
      label: "COMMUNITY_FEED",
      platform: "TIKTOK_MATRIX",
      status: "MAX_HYPE",
      color: "#00FF88",
    },
  ];

  return (
    <div className="w-full py-14 px-5 max-w-[1400px] mx-auto">
      <Box
        bgColor="bg-[#27262D]"
        width="w-full"
        height="h-[800px]"
        className="overflow-hidden border border-[#1a1a2e] rounded-xl flex flex-col items-stretch justify-start shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:shadow-[0_0_40px_rgba(123,97,255,0.15)] transition-all duration-500"
      >
        <TerminalHeader className="w-full shrink-0" />

        <Divider className="w-full shrink-0" />

        <div className="flex-1 w-full flex items-stretch justify-between bg-[#030308] overflow-hidden">
          <div className="w-[70%] h-full flex flex-col bg-[#030308] border-r border-[#1a1a2e]/60 relative">
            <div className="w-full p-4 flex justify-between items-center bg-[#0a0a12]/60 border-b border-[#1a1a2e]/40 z-20 backdrop-blur-sm">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#888899]">
                LIVE_COMMAND_STAGE_PREVIEW
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-[#00FF88] px-2 py-0.5 bg-[#00FF88]/10 rounded border border-[#00FF88]/20 animate-pulse">
                  SYSTEM_HOT
                </span>
                <span className="font-mono text-xs font-bold text-[#888899] tracking-widest">
                  T+{uptime}
                </span>
              </div>
            </div>

            {/* Layer B: Graphic Layout Workspace (Centers the image container safely) */}
            <div className="flex-1 w-full relative flex items-center justify-center p-6 bg-black/30">
              <img
                src={studio}
                alt="StreamBooth Live Command Control Studio Room"
                className="w-full h-full object-contain filter brightness-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-6 pointer-events-none border border-[#00F5FF]/10 flex flex-col justify-between p-4 z-10">
                <div className="flex justify-between w-full">
                  <div className="w-3 h-3 border-t-2 border-l-2 border-[#00F5FF]/40" />
                  <div className="w-3 h-3 border-t-2 border-r-2 border-[#00F5FF]/40" />
                </div>

                <div className="flex flex-col gap-2 max-w-[240px] bg-[#0a0a12]/80 backdrop-blur-md p-3 border border-[#1a1a2e] rounded-md shadow-2xl self-start ml-4 mb-4">
                  <div className="font-mono text-[10px] text-[#888899] uppercase tracking-wider pb-1 border-b border-white/5">
                    SIGNAL_ROUTING_MATRIX
                  </div>
                  {dataNodes.map((node) => (
                    <div
                      key={node.id}
                      className="flex items-center justify-between gap-4 font-mono text-[10px]"
                    >
                      <span className="text-white/60 font-medium">
                        {node.label}
                      </span>
                      <span
                        style={{ color: node.color }}
                        className="font-bold tracking-tight"
                      >
                        {node.platform}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between w-full">
                  <div className="w-3 h-3 border-b-2 border-l-2 border-[#00F5FF]/40" />
                  <div className="w-3 h-3 border-b-2 border-r-2 border-[#00F5FF]/40" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%] h-full p-6 flex flex-col gap-6 bg-[#0a0a12]/80 overflow-y-auto scrollbar-none shrink-0">
            <SentimentChart />
            <LiveMatrixChat />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default LiveCamFeed;

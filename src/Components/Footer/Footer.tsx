import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";
import Box from "../BoxModel/Box";
import Divider from "../Line/Divider";

const Footer = () => {
  return (
    <footer>
      <Box
        bgColor="bg-[#0F0E17]"
        width="w-full"
        height="h-[350px]"
        className="border border-t-white/20 px-3"
      >
        <div className="flex  justify-between">
          <div>
            <div className="flex gap-2 items-center ">
              <TitleText
                text="terminal"
                size="text-[18px]"
                color="text-[#00FFFF]"
                className="text-center mt-20 font-console"
              />
              <TitleText
                text="STREAMBOOTH"
                size="text-[18px]"
                color="text-[#9B7FD4]"
                className="text-center font-console font-semibold mt-20"
              />
            </div>
            <DescriptionText
              text="Advance streaming command infrastructure for high-performance broadcasting. Engineering for the creator economy "
              size="text-[16px]"
              color="text-white/60"
              className="mt-2 w-[350px]"
            />
          </div>
          <div className="mt-20">
            <TitleText text="MODULES" size="text-[18px]" color="text-white" />
            <div className="space-y-1 mt-2">
              <TitleText
                text="SIGNAL_ENGINE"
                size="text-[16px]"
                color="text-white/60"
              />
              <TitleText
                text="MATRIX_CHART"
                size="text-[16px]"
                color="text-white/60"
              />
              <TitleText
                text="OVERLAY_PRO"
                size="text-[16px]"
                color="text-white/60"
              />
            </div>
          </div>
          <div className="mt-20">
            <TitleText
              text="INFRASTRUCTURE"
              size="text-[18px]"
              color="text-white"
            />
            <div className="space-y-1 mt-2">
              <TitleText
                text="SYSTEM_STATUS"
                size="text-[16px]"
                color="text-white/60"
              />
              <TitleText
                text="API_DOCS"
                size="text-[16px]"
                color="text-white/60"
              />
              <TitleText
                text="SECURITY_HULL"
                size="text-[16px]"
                color="text-white/60"
              />
            </div>
          </div>
        </div>
        <div className="py-8">
          <Divider />
        </div>
        <div className="flex items-center justify-between mt-4">
          <TitleText
            text="© 2024 StreamBooth_CORP // MISSION_CONTROL_V1.0.4-STABLE"
            size="text-sm"
            color="text-white/60"
            className="font-console"
          />
          <div className="font-console flex gap-4 items-center">
            <TitleText text="router" color="text-white/60" />
            <TitleText text="sensors" color="text-white/60" />
            <TitleText text="terminal" color="text-white/60" />
          </div>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;

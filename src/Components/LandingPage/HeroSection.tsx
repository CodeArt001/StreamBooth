import Button from "../BoxModel/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="inline-block border border-red-500 bg-[#1A0B0B] rounded-full animate-smooth-pulse">
          <div className="flex gap-3 justify-center items-center px-6 py-1.5">
            {/* The Sharp Dot */}
            <div className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626]" />

            {/* The Text */}
            <div className="flex gap-2 items-center font-console tracking-widest text-[18px] ">
              <span className="text-red-500 font-bold">Live</span>
              <span className="text-red-500/80">
                The Future of Live Broadcasting
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-50 mt-10 ">
        <div className="flex flex-col items-center justify-center">
          <TitleText
            text="The Internet Is Live"
            size="text-8xl"
            weight="font-bold"
            className="font-display"
          />
          <TitleText
            text="Right Now."
            size="text-8xl"
            weight="font-bold"
            color="text-red-600"
            className="font-display py-3"
          />
          <TitleText
            text="You Are The Director."
            size="text-8xl"
            weight="font-bold"
            className="font-display"
          />

          <DescriptionText
            text="Connect to any trending live event on the internet. Synthesize real-time crowd data, sentiment analytics, and chat feeds into your own premium, 100% monetizable studio broadcast."
            size="text-[1.25rem]"
            className="w-[1000px] text-center py-4 font-body text-[#888899] leading-relaxed"
          />

          <div className="flex items-center gap-6 mt-8">
            <Button
              text="Start For Free"
              bgColor="bg-red-600"
              color="text-white"
              className="font-body"
            />
            <Button
              text="See It In Action"
              color="text-white"
              className="font-body"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import Button from "../BoxModel/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-50 mt-14 ">
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

import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import Card from "./card";

const WhoItsFor = () => {
  return (
    <>
      <div className="text-center pb-14">
        <TitleText text="WHO IT'S FOR" size="text-3xl" className="font-body" />
        <div className="mt-4 text-2xl">
          <DescriptionText
            text=" Buit For Everyone With Audience"
            className="text-gray-500 mt-4 text-center"
          />
          <DescriptionText text="From music fans pages to sports communities, StreamBooth empowers you to direct any live moment" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card
          Title="MUSIC FAN PAGE"
          text="MUSIC"
          description1="Sync global audio feeds"
          description2="Real-time hype tracking"
          type="Audio"
          clear="CLEARED"
        />
        <Card
          Title="MUSIC FAN PAGE"
          text="MUSIC"
          description1="Sync global audio feeds"
          description2="Real-time hype tracking"
          type="Audio"
          clear="CLEARED"
        />
        <Card
          Title="MUSIC FAN PAGE"
          text="MUSIC"
          description1="Sync global audio feeds"
          description2="Real-time hype tracking"
          type="Audio"
          clear="CLEARED"
        />
        <Card
          Title="MUSIC FAN PAGE"
          text="MUSIC"
          description1="Sync global audio feeds"
          description2="Real-time hype tracking"
          type="Audio"
          clear="CLEARED"
        />
      </div>
    </>
  );
};

export default WhoItsFor;

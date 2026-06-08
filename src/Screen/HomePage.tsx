// import CommandModuleSuite from "../Components/CommandSuite/CommandModuleSuite";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import HeroSection from "../Components/LandingPage/HeroSection";
import LiveCamFeed from "../Components/LandingPage/LiveCamFeed";
import AccessTierSection from "../Components/PriceCard/AccessTierSection";
import WhoItsFor from "../Components/WhoItsFor/WhoItsFor";
// import AccessTierSection from "../Components/PriceCard/AccessTierSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LiveCamFeed />
      <div id="features" className="scroll-mt-24 ">
        <HowItWorks />
      </div>
      {/* <div id="features" className="scroll-mt-24 ">
        <CommandModuleSuite />
      </div> */}
      <div id="pricing" className="scroll-mt-24 ">
        <AccessTierSection />
      </div>
      <div id="who-its-for" className="scroll-mt-24 px-8 mb-18">
        <WhoItsFor />
      </div>
    </div>
  );
};

export default HomePage;

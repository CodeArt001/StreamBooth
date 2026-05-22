import CommandModuleSuite from "../Components/CommandSuite/CommandModuleSuite";
import HeroSection from "../Components/LandingPage/HeroSection";
import LiveCamFeed from "../Components/LandingPage/LiveCamFeed";
import AccessTierSection from "../Components/PriceCard/AccessTierSection";
// import AccessTierSection from "../Components/PriceCard/AccessTierSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LiveCamFeed />
      <div id="features" className="scroll-mt-24 ">
        <CommandModuleSuite />
      </div>
      <AccessTierSection />
    </div>
  );
};

export default HomePage;

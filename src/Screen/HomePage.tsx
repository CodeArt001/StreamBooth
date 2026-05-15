import CommandModuleSuite from "../Components/CommandSuite/CommandModuleSuite";
import HeroSection from "../Components/LandingPage/HeroSection";
import LiveCamFeed from "../Components/LandingPage/LiveCamFeed";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LiveCamFeed />
      <CommandModuleSuite />
    </div>
  );
};

export default HomePage;

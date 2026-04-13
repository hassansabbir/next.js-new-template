import Banner from "./home/banner/Banner";
import Features from "./home/features/Features";
import Stats from "./home/stats/Stats";
import CTA from "./home/cta/CTA";

const WebsiteMainPage = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Features />
      <Stats />
      <CTA />
    </div>
  );
};

export default WebsiteMainPage;


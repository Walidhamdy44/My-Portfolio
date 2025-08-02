import HeroSec from "../components/Home/HeroSec";
import Skills from "../components/Home/Skills";
import VodeoSec from "../components/Home/VodeoSec";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Statistics from "../components/Home/Statistics";
import Services from "../components/Home/Services";
import FooterEl from "../components/Layout/FooterEl";
import HeaderNav from "../components/Layout/HeaderNav";
import LoadingAnimation from "../components/Layout/LoadingAnimation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <HeaderNav />
          <HeroSec />
          <Statistics />
          <Services />
          <Skills />
          <FeaturedProjects />
          {/* <VodeoSec /> */}
          <FooterEl />
        </div>
      )}
    </div>
  );
};

export default HomePage;

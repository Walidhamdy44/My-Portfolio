// import React from "react";
import { useEffect, useState } from "react";
import AboutContanier from "../components/About/AboutContanier";
import FooterEl from "../components/Layout/FooterEl";
import HeaderNav from "../components/Layout/HeaderNav";
import LoadingAnimation from "../components/Layout/LoadingAnimation";
const AboutPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <HeaderNav />
          <AboutContanier />
          <FooterEl />
        </div>
      )}
    </div>
  );
};

export default AboutPage;

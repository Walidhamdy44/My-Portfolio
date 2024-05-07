import CvEl from "../components/CV/CvEl";
import FooterEl from "../components/Layout/FooterEl";
import HeaderNav from "../components/Layout/HeaderNav";
import LoadingAnimation from "../components/Layout/LoadingAnimation";
import { useEffect, useState } from "react";

const CvPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <HeaderNav />
          <CvEl />
          <FooterEl />
        </div>
      )}
    </div>
  );
};
export default CvPage;

import HeaderNav from "../components/Layout/HeaderNav";
import FooterEl from "../components/Layout/FooterEl";
import ProductDetails from "../components/Projects/ProductDetails";
import LoadingAnimation from "../components/Layout/LoadingAnimation";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <HeaderNav />
          <ProductDetails />
          <FooterEl />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;

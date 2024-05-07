//
import { Container } from "react-bootstrap";
import HeaderNav from "../components/Layout/HeaderNav";
import FooterEl from "../components/Layout/FooterEl";
import Contact from "../components/Contact/Contact";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/Layout/LoadingAnimation";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <HeaderNav />
          <Contact />
          <FooterEl />
        </div>
      )}
    </Container>
  );
};

export default ContactPage;

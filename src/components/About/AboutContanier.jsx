import { Container } from "react-bootstrap";
import AboutLink from "./AboutLink";
import AboutText from "./AboutText";

const AboutContanier = () => {
  return (
    <Container>
      <div className="about">
        <AboutText />
        <AboutLink />
      </div>
    </Container>
  );
};

export default AboutContanier;

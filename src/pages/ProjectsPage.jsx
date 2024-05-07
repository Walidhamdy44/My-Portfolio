import { Container } from "react-bootstrap";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import FooterEl from "../components/Layout/FooterEl";
import HeaderNav from "../components/Layout/HeaderNav";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/Layout/LoadingAnimation";

const ProjectsPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Container>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <HeaderNav />
          <ProjectsContainer />
          <FooterEl />
        </div>
      )}
    </Container>
  );
};

export default ProjectsPage;

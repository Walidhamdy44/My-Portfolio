import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetailsPage";
import ContactPage from "./pages/ContactPage";
import CvPage from "./pages/CvPage";

//
function App() {
  return (
    <Container className="container-out">
      <div className="whatsapp">
        <a target="_blank" href="https://wa.me/01144706724" rel="noreferrer">
          <img alt="whatsapp" src="/whatsapp.png" />
        </a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

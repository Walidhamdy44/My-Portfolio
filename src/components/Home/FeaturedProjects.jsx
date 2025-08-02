import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import data from "../../logic/data";

const FeaturedProjects = () => {
  // Get first 6 projects for featured section
  const featuredProjects = data.slice(0, 6);

  // Validate URL function
  const valid = (e) => {
    if (e.target.href === "") {
      toast.error("The Code Under Review !");
    }
  };

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Explore some of my recent work showcasing modern web development
          </motion.p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((item, index) => (
            <motion.div
              key={item.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="project-image">
                <Link to={`/project/${item.id}`}>
                  <img alt={item.title} src={item.coverimg} />
                </Link>
                <div className="project-overlay">
                  <Link to={`/project/${item.id}`} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc.slice(0, 100)}...</p>

                <div className="project-skills">
                  {item.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {item.skills.length > 4 && (
                    <span className="skill-tag more">
                      +{item.skills.length - 4} more
                    </span>
                  )}
                </div>

                <div className="project-links">
                  <Link to={`/project/${item.id}`} className="details-btn">
                    Details
                  </Link>
                  <div className="external-links">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={valid}
                      title="View on GitHub"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={valid}
                      title="Live Demo"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/projects" className="view-all-btn">
            View All Projects
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
};

export default FeaturedProjects;

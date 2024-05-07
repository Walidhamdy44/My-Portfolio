/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
//
const ProjectsItem = ({ myData }) => {
  // func for links -->

  const valid = (e) => {
    if (e.target.href === "") {
      toast.error("The Code Under Review !");
    }
  };

  return (
    <AnimatePresence>
      {myData.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="box"
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 8,
            }}
            exit={{ transform: "scale(0)" }}
          >
            <div className="img">
              <Link to={`/project/${item.id}`}>
                <img alt="jj" src={item.coverimg} />
              </Link>
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.desc.slice(0, 90)}</p>
              <div className="links">
                <div className="btn-link">
                  <Link to={`/project/${item.id}`}>Details</Link>
                </div>
                <div>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={valid}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={valid}
                  >
                    <i className="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
      <Toaster />
    </AnimatePresence>
  );
};

export default ProjectsItem;

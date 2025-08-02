import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    skills: 0,
  });

  const stats = [
    {
      number: 20,
      label: "Projects Completed",
      icon: "fa-solid fa-code",
      color: "#667eea",
    },
    {
      number: 3,
      label: "Years Experience",
      icon: "fa-solid fa-clock",
      color: "#764ba2",
    },
    {
      number: 15,
      label: "Happy Clients",
      icon: "fa-solid fa-users",
      color: "#f093fb",
    },
    {
      number: 25,
      label: "Skills Mastered",
      icon: "fa-solid fa-tools",
      color: "#4facfe",
    },
  ];

  useEffect(() => {
    const animateCounts = () => {
      stats.forEach((stat, index) => {
        const timer = setTimeout(() => {
          setCounts((prev) => ({
            ...prev,
            [Object.keys(counts)[index]]: stat.number,
          }));
        }, index * 200);

        return () => clearTimeout(timer);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounts();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector(".statistics");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="statistics">
      <div className="container">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <motion.div
                  className="stat-number"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {counts[Object.keys(counts)[index]]}+
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;

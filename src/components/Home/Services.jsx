import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Frontend Development",
      description:
        "Building responsive, modern web applications using React, Next.js, and Vue.js with focus on performance and user experience.",
      features: ["React/Next.js", "Vue.js", "TypeScript", "Responsive Design"],
      color: "#667eea",
    },
    {
      icon: "fa-solid fa-mobile-screen",
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications using React Native for iOS and Android platforms.",
      features: [
        "React Native",
        "Cross-platform",
        "Native Performance",
        "App Store",
      ],
      color: "#764ba2",
    },
    {
      icon: "fa-solid fa-search",
      title: "SEO Optimization",
      description:
        "Improving website visibility and search engine rankings through technical SEO and content optimization.",
      features: [
        "Technical SEO",
        "Google Analytics",
        "Performance",
        "Content Strategy",
      ],
      color: "#f093fb",
    },
    {
      icon: "fa-solid fa-palette",
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with modern design principles and animations.",
      features: ["Framer Motion", "GSAP", "Modern UI", "User Experience"],
      color: "#4facfe",
    },
    {
      icon: "fa-solid fa-database",
      title: "Backend Development",
      description:
        "Building robust backend systems and APIs using Node.js, Express, and various databases.",
      features: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      color: "#43e97b",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, efficiency, and better user experience across all devices.",
      features: [
        "Speed Optimization",
        "Code Splitting",
        "Lazy Loading",
        "Caching",
      ],
      color: "#fa709a",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Services I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Comprehensive web development solutions tailored to your needs
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                <i className={service.icon}></i>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-overlay">
                <div className="overlay-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

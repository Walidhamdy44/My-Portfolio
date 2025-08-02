import { useState } from "react";

const AboutText = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("(+20) 1144706724");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  const timelineData = [
    {
      year: "2024 - Present",
      title: "Front-End Developer & SEO Specialist",
      company: "Skyloov Property Portal - UAE, Dubai",
      description:
        "Developed large-scale websites using Next.js and React, including CRM management systems and portal systems. Built blog management system using Vue.js. Led SEO strategy, improving website rankings and increasing organic traffic.",
      skills: [
        "Next.js",
        "React",
        "Vue.js",
        "SEO",
        "CRM Systems",
        "Portal Systems",
      ],
    },
    {
      year: "2023 - 2024",
      title: "Front-End Developer",
      company: "MeetUs-VR",
      description:
        "Developed Responsive Web Applications: Created and maintained 4 highly responsive web applications tailored to specific client needs with ReactJS and Next JS. UI/UX Implementation: Translated design mock-ups and wireframes into high-quality code, maintaining consistency with design specifications.",
      skills: [
        "React",
        "Next.js",
        "UI/UX",
        "Responsive Design",
        "Client Management",
      ],
    },
    {
      year: "2020 - 2024",
      title: "Bachelor of Computer Science",
      company: "Minya University, College of Science",
      description:
        "Graduated with B GPA 2.90 of 4. Completed ITI-ORGANIZATION Fundamentals MERN Stack. Graduate Project using Web Fundamentals and Mathematica.",
      skills: [
        "Computer Science",
        "MERN Stack",
        "Web Fundamentals",
        "Mathematica",
      ],
    },
    {
      year: "2018",
      title: "Started Programming Journey",
      company: "Self-Learning",
      description:
        "Began learning programming fundamentals and web development technologies.",
      skills: ["HTML", "CSS", "JavaScript", "Programming Fundamentals"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "React Native",
      ],
    },
    {
      category: "Styling",
      items: [
        "Tailwind CSS",
        "Bootstrap",
        "Material-UI",
        "SCSS/SASS",
        "Framer Motion",
        "GSAP",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "PHP", "Firebase", "Strapi"],
    },
    { category: "Database", items: ["MongoDB", "MySQL", "SQL Server"] },
    {
      category: "Tools",
      items: ["Git/GitHub", "Command Line", "Webpack", "Figma", "JWT & Auth"],
    },
    {
      category: "Soft Skills",
      items: [
        "Communication",
        "Problem-Solving",
        "Algorithms",
        "Data Structures",
      ],
    },
  ];

  return (
    <div className="about-content">
      <div className="about-header">
        <h1>Walid Hamdy</h1>
        <h2>Front End React | Next.js Developer</h2>
        <p className="summary">
          Results-driven Frontend Developer with +3 years of experience,
          specializing in React and Next.js for building intuitive, responsive
          interfaces. Skilled at translating designs into clean, maintainable
          code, optimizing performance, and ensuring compatibility across
          browsers.
        </p>
      </div>

      <div className="about-tabs">
        <button
          className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`tab-btn ${activeTab === "timeline" ? "active" : ""}`}
          onClick={() => setActiveTab("timeline")}
        >
          Career Timeline
        </button>
        <button
          className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "about" && (
          <div className="about-section">
            <div className="personal-info">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <strong>Location:</strong> Egypt, 6th of October
                </div>
                <div className="info-item">
                  <strong>Phone:</strong>{" "}
                  <span
                    className={`phone-number ${copied ? "copied" : ""}`}
                    onClick={handleCopyPhone}
                    title="Click to copy phone number"
                  >
                    (+20) 1144706724
                    {copied && <span className="copy-feedback">✓ Copied!</span>}
                  </span>
                </div>
                <div className="info-item">
                  <strong>Email:</strong> walidhamdy314@gmail.com
                </div>
                <div className="info-item">
                  <strong>Languages:</strong> Arabic , English
                </div>
              </div>
            </div>

            <div className="education">
              <h3>Education</h3>
              <p>
                I was born on August 13, 2002, in El Minya, Egypt. I attended
                elementary school, followed by preparatory school, and then
                completed secondary education. Afterward, I enrolled in the
                Faculty of Science at Minya University.
              </p>
              <p>
                In the second grade, I joined the Computer Science department
                because ever since I was young, I had aspired to become a
                programmer. I began learning programming in 2018 and have been
                passionate about web development ever since.
              </p>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="timeline-section">
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-description">{item.description}</p>
                    <div className="timeline-skills">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="skills-section">
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutText;

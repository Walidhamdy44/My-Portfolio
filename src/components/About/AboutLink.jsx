// import img from "/img.jpg";

const AboutLink = () => {
  return (
    <div className="img">
      <div className="image">
        <img src="/me.png" alt="Walid Hamdy - Frontend Developer" />
      </div>
      <div className="links">
        <a
          href="https://github.com/Walidhamdy44"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on GitHub"
        >
          <i className="fa-brands fa-github"></i>
          <span>Follow On Github</span>
        </a>
        <a
          href="https://www.facebook.com/walidhamdy314/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
          <span>Follow On Facebook</span>
        </a>
        <a
          href="https://twitter.com/walidHamdy44"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on Twitter"
        >
          <i className="fa-brands fa-twitter"></i>
          <span>Follow On Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com/in/walid-hamdy44/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span>Follow On LinkedIn</span>
        </a>
      </div>
      <div className="mail">
        <a
          href="mailto:walidhamdy314@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Send email to walidhamdy314@gmail.com"
        >
          <i className="fa-solid fa-envelope"></i>
          <span>walidhamdy314@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default AboutLink;

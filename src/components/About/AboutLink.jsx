// import img from "/img.jpg";

const AboutLink = () => {
  return (
    <div className="img">
      <div className="image">
        <img src="/img.jpg" alt="uu" />
      </div>
      <div className="links">
        <a
          href="https://github.com/Walidhamdy44"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          <span>Follow On Github</span>
        </a>
        <a
          href="https://www.facebook.com/walid.elgen.75/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
          <span>Follow On Facebook</span>
        </a>
        <a
          href="https://twitter.com/walidHamdy44"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
          <span>Follow On Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com/in/walid-hamdy-150916253/"
          target="_blank"
          rel="noreferrer"
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
        >
          <i className="fa-solid fa-envelope"></i>
          <span>walidhamdy314@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default AboutLink;

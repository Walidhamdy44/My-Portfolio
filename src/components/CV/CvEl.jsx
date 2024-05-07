// import cv from "/FrontEnd React-Walid Hamdy-CV.pdf";

const CvEl = () => {
  return (
    <div className="cv p-4">
      <div className="head">
        <h2>Hire Me 🤍</h2>
        <button className="custom-btn btn-cv">
          <span>
            <a
              download="Walid_Hamdy-FrontEnd(React)-Cv"
              href="FrontEnd React-Walid Hamdy-CV.pdf"
            >
              Download !
            </a>
          </span>
          <span>My Cv!</span>
        </button>
      </div>
      <div className="img">
        <img alt="cv" src="/cv.jpg" />
      </div>
    </div>
  );
};

export default CvEl;

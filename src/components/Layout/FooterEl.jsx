import { Link } from "react-router-dom";

const FooterEl = () => {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cv">Cv</Link>
          </li>
        </ul>
      </div>
      <div className="copy">© 2024 Walid Hamdy. All rights reserved.</div>
    </div>
  );
};

export default FooterEl;

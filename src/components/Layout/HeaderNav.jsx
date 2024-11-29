import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import me from "me2.png";

const HeaderNav = () => {
  const [mode, setMode] = useState("dark");
  //  state To Manage Menu show -->
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.classList.add(mode);
    if (mode === "white") {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  const changeMode = () => {
    if (mode === "dark") setMode("white");
    if (mode === "white") {
      document.body.classList.remove("white");
      setMode("dark");
    }
  };

  //
  const handlShow = () => {
    setShow(!show);
  };

  return (
    <div className="header">
      {show ? (
        <motion.div
          className="menu-modul"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <ul className="menu-links">
            <div>
              <span>Menu</span>
              <span onClick={handlShow}>
                <motion.i
                  className="fa-solid fa-xmark"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1.5 }}
                ></motion.i>
              </span>
            </div>
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
        </motion.div>
      ) : null}
      <button className="btn-menu" onClick={handlShow}>
        <i className="fa-solid fa-bars"></i>
        <span>Menu</span>
      </button>
      {window.location.pathname === "/" ||
      window.location.pathname === "" ? null : (
        <div className="logo">
          <Link to="/">
            <img alt="jj" src="/me2.png" />
          </Link>
        </div>
      )}
      <div className="nav-bar">
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
      <button onClick={changeMode}>
        {mode === "dark" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </div>
  );
};

export default HeaderNav;

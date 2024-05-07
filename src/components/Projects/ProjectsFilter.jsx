/* eslint-disable react/prop-types */
import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";

const ProjectsFilter = ({ searchKey }) => {
  // state to set active class -->
  const [clicked, setClicked] = useState("all");

  // the key is the searchWord To filter -->
  return (
    <div className="filter-container">
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("all");
          searchKey("all");
        }}
        className={clicked === "all" ? "active" : null}
      >
        All Projects 🤍
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("css");
          searchKey("css");
        }}
        className={clicked === "css" ? "active" : null}
      >
        HTML & CSS 💢
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("js");
          searchKey("js");
        }}
        className={clicked === "js" ? "active" : null}
      >
        HTML & CSS & JS 🌊
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("sass");
          searchKey("sass");
        }}
        className={clicked === "sass" ? "active" : null}
      >
        HTML & SASS & JS ⚡
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("react");
          searchKey("react");
        }}
        className={clicked === "react" ? "active" : null}
      >
        REACT & BootStrap 🐱‍👤
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("api");
          searchKey("api");
        }}
        className={clicked === "api" ? "active" : null}
      >
        REACT & BackEnd (Api) 🐱‍🏍
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("next");
          searchKey("next");
        }}
        className={clicked === "next" ? "active" : null}
      >
        NEXT With TS 💨
      </AwesomeButton>
      <AwesomeButton
        type=""
        onPress={() => {
          setClicked("full");
          searchKey("full");
        }}
        className={clicked === "full" ? "active" : null}
      >
        Full Stack App ☠
      </AwesomeButton>
    </div>
  );
};

export default ProjectsFilter;

import ItemContainer from "./ItemContainer";
import ProjectsFilter from "./ProjectsFilter";
import data from "../../logic/data";
import { useState } from "react";

const ProjectsContainer = () => {
  // state to store the new arr and send it to the component -->

  const [myData, setMyData] = useState(data);

  const searchKey = (key) => {
    let arr = data.filter((item) => {
      let newArr = item.catagory.filter((newItem) => {
        return newItem === key;
      });

      return newArr[0] === key;
    });
    setMyData(arr);
  };

  return (
    <div className="filter">
      <ProjectsFilter searchKey={searchKey} />
      <ItemContainer myData={myData} />
    </div>
  );
};

export default ProjectsContainer;

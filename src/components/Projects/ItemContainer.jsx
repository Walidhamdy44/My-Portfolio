import ProjectsItem from "./ProjectsItem";

const ItemContainer = ({ myData }) => {
  return (
    <div className="item-container">
      <ProjectsItem myData={myData} />
    </div>
  );
};

export default ItemContainer;

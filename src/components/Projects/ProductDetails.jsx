import toast, { Toaster } from "react-hot-toast";
import data from "../../logic/data";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const valid = (e) => {
    if (e.target.href === "") {
      toast.error("The Code Under Review !");
    }
  };

  return (
    <div className="details">
      <div className="head">
        <img alt="jj" src={data[id - 1].coverimg} />
      </div>
      <div className="body">
        <h2> project Details </h2>
        <div className="container-info">
          <div className="info">
            <ul>
              <li>
                <span>Name :</span> <span>{data[id - 1].title}</span>
              </li>
              <li>
                <span>Info :</span>
                <span>{data[id - 1].desc}</span>
              </li>
            </ul>
          </div>
          <div className="all-skills">
            <ul>
              <h4>Skills </h4>
              {data[id - 1].skills.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="images">
          {data[id - 1].images.map((item, index) => {
            return (
              <div key={index} className="img">
                <img alt="img1" src={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="foot">
        <a
          href={data[id - 1].demo}
          target="_blank"
          rel="noreferrer"
          onClick={valid}
        >
          View Live Demo !
        </a>
        <a
          href={data[id - 1].github}
          target="_blank"
          rel="noreferrer"
          onClick={valid}
        >
          Code !
        </a>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductDetails;

import "../../css/projectSingle.css";

const ProjectSingle = ({ title, category, description, image }) => {
  return (
    <div className={`card rounded-md`}>
      <div className={`image rounded-md`}>
        <img src={image} />
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-cool-black-400 font-bold">{title}</p>
          <p>{category}</p>
        </div>
      </div>
      <div className="details">
        <div className="center">
          <div>
            <h1>
              {title}
              <p>{category}</p>
            </h1>
          </div>
          <p>{description}</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;

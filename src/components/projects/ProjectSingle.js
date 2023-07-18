import "../../css/projectSingle.css";

const ProjectSingle = ({ title, category, description, image }) => {
  return (
    <div className={`card w-2/3 sm:h-[24rem] sm:w-4/5 rounded-md `}>
      <div className={`image rounded-md`}>
        <img src={image} />
        <div className="flex flex-col justify-center items-center p-3 sm:mt-3">
          <p className="text-cool-black-400 font-bold">{title}</p>
          <p className="font-bold text-cool-black-300">{category}</p>
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

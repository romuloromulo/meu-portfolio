import "../../css/projectSingle.css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectSingle = ({
  title,
  category,
  description,
  image,
  linkSite,
  linkGit,
  tecnologias,
}) => {
  return (
    <div className={`card w-2/3 sm:h-[34rem] sm:w-4/5 rounded-md `}>
      <div className={`image rounded-md`}>
        <img src={image} />
        <div className="flex flex-col justify-center items-center p-3 sm:mt-3">
          <p className="text-cool-black-600 font-bold text-xl">{title}</p>
          <p className="font-bold text-cool-black-400 border-b border-cool-black-200">
            {category}
          </p>
          <p className="text-sm font-semibold text-cool-black-700">
            {description}
          </p>
        </div>
      </div>
      <div className="details">
        <div className="center">
          <div>
            <h1>
              <p className="font-bold text-cool-black-700 text-xl">{title}</p>
              <p className="text-cool-black-500">{category}</p>
            </h1>
            <div className="flex flex-col items-start justify-center text-cool-black-500 ">
              <a
                className="hover:underline hover:text-cool-black-300 cursor-pointer flex items-center justify-center gap-2"
                href={linkSite}
                target="_blank">
                <BsArrowUpRight size={15} /> Live
              </a>
              <a
                className="hover:underline hover:text-cool-black-300 cursor-pointer flex items-center justify-center gap-2"
                href={linkGit}
                target="_blank">
                <BsGithub size={17} /> Repositório Git
              </a>
            </div>
            {/* <ul className="flex">
              {tecnologias?.map((tec) => {
                <li>{tec}</li>;
              })}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;

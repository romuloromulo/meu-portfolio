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
    <div className={`card w-2/3 sm:h-[34rem] sm:w-4/5 rounded-md bg-white`}>
      <div className={`image rounded-md`}>
        <div className="overflow-hidden h-[30%]">
          <img src={image} className="h-auto" alt="imagem do projeto" />
        </div>
        <div className="flex flex-col justify-center items-center p-3 sm:mt-3">
          <p className="text-cool-black-600 font-bold text-xl">{title}</p>
          <p className="font-bold text-cool-black-400 border-b border-cool-black-200 mb-2">
            {category}
          </p>
          <p className="sm:text-sm text-xs  font-semibold text-cool-black-700">
            {description}
          </p>
        </div>
      </div>
      <div className="details">
        <div className="center ">
          <div className="">
            <h1>
              <p className="font-bold text-cool-black-700 text-xl">{title}</p>
              <p className="text-cool-black-500">{category}</p>
            </h1>
            <div className="flex flex-col items-start justify-center text-cool-black-500 ">
              {linkSite ? (
                <a
                  className="hover:underline hover:text-cool-black-300 cursor-pointer flex items-center justify-center gap-2"
                  href={linkSite}
                  target="_blank"
                  rel="noreferrer">
                  <BsArrowUpRight size={15} /> Live
                </a>
              ) : (
                ""
              )}
              <a
                className="hover:underline hover:text-cool-black-300 cursor-pointer flex items-center justify-center gap-2"
                href={linkGit}
                target="_blank"
                rel="noreferrer">
                <BsGithub size={17} /> Repositório Git
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;

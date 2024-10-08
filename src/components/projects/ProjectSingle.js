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
    <div
      className={`card w-[95%] h-[38rem]  sm:w-full rounded-md bg-white relative `}
    >
      <div className={`rounded-md flex flex-col`}>
        <div className="overflow-hidden h-[11rem] rounded-t-md">
          <img src={image} className="h-auto" alt="imagem do projeto" />
        </div>
        <div className="flex flex-col justify-center items-center p-3 sm:mt-3">
          <p className="text-cool-black-600 font-bold text-xl">{title}</p>
          <p className="font-bold text-cool-black-400 border-b border-cool-black-200 mb-2">
            {category}
          </p>
          <div className="sm:text-sm text-cool-black-800 text-sm max-h-[12rem] overflow-y-auto p-1">
            {description}
          </div>

          <div className="flex  text-cool-black-800 text-sm w-full justify-start items-center absolute bottom-20 left-4 font-semibold">
            <p className="text-md">Tecnologias usadas:</p>
            {tecnologias?.map((tec) => (
              <div className="ml-2">{tec}</div>
            ))}
          </div>

          <div className="flex w-full items-center justify-start gap-4 mt-8 font-semibold bottom-4 left-4 absolute">
            {linkSite ? (
              <a
                className="hover:underline text-cool-black-100 hover:text-cool-black-300 cursor-pointer flex items-center justify-center gap-2 bg-cool-black-800 px-4 py-2 rounded-lg"
                href={linkSite}
                target="_blank"
                rel="noreferrer"
              >
                Projeto Online <BsArrowUpRight size={15} />
              </a>
            ) : (
              ""
            )}
            <a
              className="hover:underline hover:text-cool-black-300 cursor-pointer flex items-center justify-center gap-2"
              href={linkGit}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={17} /> Código Fonte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;

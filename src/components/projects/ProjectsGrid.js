import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectSingle from "./ProjectSingle";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);
  return (
    <section className="py-5 sm:py-10 mt-8 sm:mt-14">
      <div className="text-center">
        <p className="text-dim-gray-100 text-2xl md:text-3xl font-medium  underline decoration-1 decoration-[#efeff555] underline-offset-8 mb-4">
          Portfólio de Projetos
        </p>
      </div>
      <div className="mt-10 sm:mt-8">
        <h3
          className="font-general-regular 
                        text-center text-cool-black-100
                        mb-5
                        lg:mb-0
                        text-sm
                        sm:text-xl
                        ">
          Procure projetos pelo título ou filtre a categoria.
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-cool-black-100
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        mb-5
                        ">
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-cool-black-100
                                hover:bg-cool-black-300
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                group
                                mb-4
                                ">
              <FiSearch className="text-cool-black-400 dark:text-ternary-light w-5 h-5 group-hover:text-cool-black-100 ease-linear duration-150"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="
                                pl-3
                                pr-1
                                mb-4
                                sm:px-4
                                py-2
                                w-48
                                border 
                                border-transparent
                                dark:border-secondary-dark
                                rounded-lg
                                text-cool-black-500
                                font-bold                            
                                text-sm
                                sm:text-md
                                bg-cool-black-300
                                dark:bg-ternary-dark
                                text-primary-dark
                                placeholder:font-medium
                                placeholder:text-cool-black
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Buscar Projetos"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 place-items-center gap-y-4	 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {selectProject
            ? selectProjectsByCategory.map((project) => (
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  key={project.id}
                />
              ))
            : searchProject
            ? searchProjectsByTitle.map((project) => (
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  key={project.id}
                />
              ))
            : projects.map((project) => (
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  key={project.id}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

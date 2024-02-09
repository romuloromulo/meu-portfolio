import { ProjectsProvider } from "../context/ProjectsContext";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Projetos = () => {
  return (
    <ProjectsProvider>
      <section id="Portfolio" className="container mx-auto lg:h-auto px-2">
        <ProjectsGrid />
        <div className="w-[7goit0%] md:w-[95%] border-b mx-auto border-cool-black-200"></div>
      </section>
    </ProjectsProvider>
  );
};

export default Projetos;

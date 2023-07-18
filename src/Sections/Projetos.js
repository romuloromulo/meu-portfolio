import { ProjectsProvider } from "../context/ProjectsContext";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Projetos = () => {
  return (
    <ProjectsProvider>
      <section id="Portfolio" className="container mx-auto lg:h-[73rem]">
        <ProjectsGrid />
        <div className="w-2/3 border-b mx-auto border-cool-black-200"></div>
      </section>
    </ProjectsProvider>
  );
};

export default Projetos;

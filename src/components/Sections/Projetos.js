import { ProjectsProvider } from "../../context/ProjectsContext";
import ProjectsGrid from "../projects/ProjectsGrid";

const Projetos = () => {
  return (
    <ProjectsProvider>
      <section id="Portfolio" className="container mx-auto lg:h-[73rem]">
        <ProjectsGrid />
      </section>
    </ProjectsProvider>
  );
};

export default Projetos;

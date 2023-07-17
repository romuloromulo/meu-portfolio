const selectOptions = ["Web Application", "Mobile Application", "UI/UX Design"];

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-8
                sm:px-6
                py-2
                border
                border-cool-black-300
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                font-semibold
                bg-cool-black-300
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
                text-dim-gray-100
            ">
      <option value={setSelectProject} className="text-sm sm:text-md">
        Geral
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;

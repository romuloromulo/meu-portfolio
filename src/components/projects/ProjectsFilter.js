const selectOptions = ["Web Application", "Mobile Application"];

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-8
                mb-4
                sm:px-6
                py-2
                w-2/5
                sm:w-48
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
                block
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

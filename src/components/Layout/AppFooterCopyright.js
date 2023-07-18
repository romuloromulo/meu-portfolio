function AppFooterCopyright() {
  return (
    <div className="font-general-regular flexjustify-center items-center text-center">
      <div className="text-lg text-cool-black-200 dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/romuloromulo/meu-portfolio/tree/main"
          target="__blank"
          className="hover:underline text-cool-black-200 hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          React & Tailwind CSS Portfolio
        </a>
        .
        <a
          href="#"
          target="__blank"
          className="text-cool-black-200 dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          Rômulo R. Viana
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;

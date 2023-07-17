const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cool-black-100": "#b0b0ce",
        "cool-black-200": "#9191bb",
        "cool-black-300": "#7171a8",
        "cool-black-400": "#57578e",
        "cool-black-500": "#44446e",
        "cool-black-600": "#31314f",
        "cool-black-700": "#1d1d2f",
        "cool-black-800": "#10101a",
        "dim-gray-100": "#d0d0e2",
        "dim-gray": "#efeff5",
      },
    },
    fontFamily: {
      sans: ['"Roboto"', "system-ui", "sans-serif"],
    },
  },
  plugins: [],
});

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

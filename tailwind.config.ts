/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["RobotoFlex"],
    },
    colors: {
      background: {
        DEFAULT: "#F6F7FA",
        200: "#dceeff",
        300: "#2e2e2e",
      },
      main: {
        DEFAULT: "#c4e2ff",
        50: "#ecf3f8",
        100: "#447baf",
        200: "#1a5895",
        300: "#c7c7cc",
        400: "#a8a9ac",
      },
    },
  },
  extend: {},
  plugins: [
    daisyui,
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};

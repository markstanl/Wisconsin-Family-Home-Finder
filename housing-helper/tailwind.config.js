/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        text: "#FFFFFF",
        background: "#242424",
        backgroundLight: "#3a3a3a",
        primary: "#c34950",
        primaryLight: "#CC666B",
        secondary: "#C5050C",
        accent: "#683ffa",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        metallic: {
          100: "#DEE0E4",
          200: "#C1C7D7",
          300: "#C6E4EC",
          400: "#60777F",
          500: "#293040",
        },
        brown: {
          100: "#C9AD8B",
          200: "#8F6449",
        },
        accent: {
          sky: "#2F76DB",
          green: "#86EAAA",
          gold: "#D5B263",
        },
      },
    },
  },
  plugins: [],
};

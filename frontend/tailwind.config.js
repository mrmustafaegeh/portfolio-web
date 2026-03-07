/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#CAFF00", // Electric Lime
        darkBg: "#080808", // Near-black foundation
      },
      fontFamily: {
        burtons: ["burtons", "cursive"],
        syne: ["Syne", "sans-serif"], // Display font
        space: ["Space Mono", "monospace"], // Accents / Body
      },
    },
  },
  plugins: [],
};

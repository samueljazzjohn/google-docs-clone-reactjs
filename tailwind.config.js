/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text:"#202124",
        toolbox:"#edf2fa",
        toolboxHover:"#e5e7eb",
        editorPrimary:"#fff",
        editorSecondary:"#f9fbfd",
    },
  },
  },
  plugins: [],
}
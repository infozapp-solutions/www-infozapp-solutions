/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif;",
      },

      colors: {
        card: "#252525",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00CCFF",
        secondary: "#143762",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blurple: "#4E5D94",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

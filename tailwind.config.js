module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blurple: "#7289DA",
        darkBlurple: "#23272A",
      },
    },
  },
  variants: {
    extend: {
      // ...
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};

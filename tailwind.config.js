module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        blurple:
          "0 20px 25px -5px rgba(114, 137, 218, 0.1), 0 10px 10px -5px rgba(114, 137, 218, 0.04)",
      },
      colors: {
        blurple: "#7289DA",
        darkBlurple: "#2c2f33",
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

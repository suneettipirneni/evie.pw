module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        blurple: "#7289DA",
        dark: "#23272A"
      }
    }
  },
  variants: {
    extend: {
      animation: ["hover", "focus"]
    }
  },
  plugins: []
};

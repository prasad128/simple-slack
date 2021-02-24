module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "2/7": "28.5714286%",
        "7/10": "71.4285714%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

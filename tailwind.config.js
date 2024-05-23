/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#B2EBF2",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        fourth: "#23445e",
        fifth: "#246584",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #050816, #16202f, #1f354b, #244c67, #246584, #246584, #246584, #246584, #244c67, #1f354b, #16202f, #050816)',
        'secondary-gradient': 'linear-gradient(to right top, #050816, #1d3045, #255a77, #1c89a9, #00bcd4)',
        'border-gradient': 'linear-gradient(to left bottom, #050816, #1d3045, #255a77, #1c89a9, #00bcd4)',
      },
    },
  },
  plugins: [],
};


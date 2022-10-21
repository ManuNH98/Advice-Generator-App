/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontSize: {
      quote: "28px",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontWeight: {
      bold: 800,
    },
    colors: {
      // Primary
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      // Primary
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },
    extend: {},
  },
  plugins: [],
};

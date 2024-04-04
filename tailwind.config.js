/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "1sm": "13px",
      },
      colors: {
        shopipi: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-8px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
        "float-2": {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-12px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-2": "float-2 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

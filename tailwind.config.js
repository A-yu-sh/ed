/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customOrange: {
          light: "#FFAD73",
          DEFAULT: "#FF7F0A", // This is equivalent to customOrange
          dark: "#CC6508",
        },
      },
    },
  },
  plugins: [],
};

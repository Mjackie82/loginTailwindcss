/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homebg: "url(./imgs/backgroundHome.jpg)",
      },
    },
  },
  plugins: [],
};

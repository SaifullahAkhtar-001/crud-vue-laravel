//** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      height: {
        'vh-17' : '17vh',
        'vh-96' : '96vh',
        'vh-26' : '26vh',
        'vh-80' : '80vh',
        'vh-40' : '40vh',
        'vh-100' : '100vh',
      },
      padding: {
        'vh-4' : '4vh'
      }
    },
  },
  plugins: [],
};
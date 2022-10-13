/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./component/**/*.tsx"],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}

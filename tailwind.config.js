/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./component/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

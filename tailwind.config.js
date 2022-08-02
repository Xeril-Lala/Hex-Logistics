/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      fontSize: {
        "3xl":"2rem",
        "2sxl":"1.30rem"
      },
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        '1/10': '10%',
        '9/10': '90%'
      }),
      spacing: {
        'topNav': '6rem',
        'sidePanel': '20rem'
      }
    },
    fontFamily: {
      'body': ['Helvetica Neue Light', 'sans-serif']
    }
  },
  plugins: [],
}

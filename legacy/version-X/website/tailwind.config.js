/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        '1/10': '10%',
        '9/10': '90%'
      }),
      spacing: {
        'topNav': '5rem',
        'sidePanel': '20rem',
        'sidePanel-height': '90%'
      }
    },
    fontFamily: {
      'body1': ['Helvetica Neue Light', 'sans-serif'],
      'body': ["'CMS'", "'Droid Sans'", 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}



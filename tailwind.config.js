/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': "#000000",
      'darkBlue': "#14213D",
      'orange': "#FCA311",
      'gray': "#E5E5E5",
      'white': "#FFFFFF"
    },
    extend: {
      fontFamily: {
        'dancing-script': ["Dancing Script", 'Open Sans'],
        'roboto': ["Roboto", 'Open Sans']
      }
    },
  },
  plugins: [],
}


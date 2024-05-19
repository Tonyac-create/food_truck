/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000814",
      darkBlue: "#001D3D",
      orange: "#FFC300",
      yellow: "#FFD60A",
      white: "#FFFFFF",
      gray: "#E5E5E5",
    },
    fontFamily: {
      "dancing-script": ["Dancing Script", "Open Sans"],
      roboto: ["Roboto", "Open Sans"],
    },
    rotate: {
      45: "-45deg",
    },
    boxShadow: {
      around: "0 0 25px 0 #FFC300",
      input: "0 0 20px 0 #FFC300",
    },
    zIndex: {
      9999: "9999",
    },
  },
  extend: {
    maxWidth: {
      '30ch': '30ch',
    },
  },
  plugins: [],
};

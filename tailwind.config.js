/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        _blue: "#0290ff",
        _gray: "#fafafa",
        _lightBlack: '#121212',
        _textBlue: '#4386bf',
        
      },
      screens: {
        "620px": "620px",
      },
    },
  },
  plugins: [],
};

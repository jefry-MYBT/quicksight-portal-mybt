/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(2px)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 4s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
      },
      colors: {
        primary: "#EF4523",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/heroBg.jpg')",
        "about-bg": "url('/src/assets/aboutBg.jpg')",
        "login-bg": "url('/src/assets/loginBg.jpg')",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
    },
  },
  plugins: [],
};

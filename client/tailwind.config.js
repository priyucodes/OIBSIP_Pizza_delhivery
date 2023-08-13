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
        "hero-bg": "url('/assets/heroBg.jpg')",
        "about-bg": "url('/assets/aboutBg.jpg')",
        "login-bg": "url('/assets/loginBg.jpg')",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
    },
  },
  plugins: [],
};

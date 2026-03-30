/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",      // marrom principal
        secondary: "#D6C3B3",    // bege claro
        background: "#F5F1EC",   // fundo geral
        dark: "#3E2C23",         // texto escuro
        accent: "#A97458",       // botão hover
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6e48aa",
        secondary: "#9d50bb",
        dark: "#1a1a2e",
        light: "#f8f9fa",
      },
    },
  },
  plugins: [],
}
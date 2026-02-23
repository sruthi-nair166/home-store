/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Montserrat", "sans"],
      },
      colors: {
        wheat: "#f5e7d5",
        dark: "#B88E2F",
      },
    },
  },
  plugins: [],
};

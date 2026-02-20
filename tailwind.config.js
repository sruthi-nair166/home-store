/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Montserrat", "sans"],
      },
      colors: {
        wheat: "#FAF3EA",
        dark: "#B88E2F",
      },
    },
  },
  plugins: [],
};

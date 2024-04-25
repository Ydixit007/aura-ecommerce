/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E5C743",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#121212",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
};

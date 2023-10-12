/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-coal": "#545454",
        "brand-yellow-primary": "#F9D326",
        "brand-yellow-muted": "#F3DE53",
        "brand-white": "#FFFFFF",
        "brand-gray-muted":"#989898",
        "brand-dark-gray":"#2C2C2C",
        "brand-dark-input":"#989898",
        "brand-blue":"#1877F2",
        "brand-circle-yellow":"#FFE15D66",
        " " : " "
      },
      fontFamily: {
        Oswald: ['Oswald', 'sans-serif'],
        OpenSans: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

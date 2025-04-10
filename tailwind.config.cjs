/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#2563eb",
        "primary-dark": "#1d4ed8",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'molengo': ['Molengo', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'sche': ['Scheherazade New', 'serif'],
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

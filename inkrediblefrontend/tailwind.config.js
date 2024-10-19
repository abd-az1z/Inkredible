/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily:{
        Font1:['font1', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


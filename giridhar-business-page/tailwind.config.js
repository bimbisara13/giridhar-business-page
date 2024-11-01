/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        customBlack: '#030000',
        customWhite: '#f5f3f4',
        customGreen: '#25D366',
      },
    },
  },
  plugins: [],
}


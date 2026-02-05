import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Merriweather"', 'serif'], 
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [
    typography, // Optional: nice for long text
  ],
}

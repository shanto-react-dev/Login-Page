/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        'black' : '#444B59',
        'blue' : '#8699DA',
        'blue-1' : '#789ADE',
        'blue-2' : '#C8D3F9',
      }
    },
    // Container
    container: {
      center: true,
    },
    // Font Family
    fontFamily: {
      'overpass' : ["Overpass", "sans-serif"],
      'nunito' : ["Nunito", "sans-serif"],
    }
  },
  plugins: [],
}
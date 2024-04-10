/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Aquí puedes agregar tu media query personalizado
        'xs': {'raw': '(max-width: 550px)'},
        '2xs': {'raw': '(max-width: 503.10px)'},
      }
    },
  },
  plugins: [],
}
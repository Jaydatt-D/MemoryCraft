/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'logo-color':'#AFFEAD'
      }
    },
    fontFamily:{
      slabo: 'Slabo 13px',
      mont: 'Montserrat'
    }
  },
  plugins: [],
}


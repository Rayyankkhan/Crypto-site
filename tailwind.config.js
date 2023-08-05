/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'monserrat': ['Montserrat', 'sans-serif'],
      'gloock': ['Gloock', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif'],
      'inter' : ['Inter' , 'sans-serif'],
    },
    extend: {
      colors:{
        'Dark': '#080D16',
        'darkblue': '#262525',
        'yellow': '#FFD600',
        'blackalpha':'#FFFFFF14',
        'whitealpha':'#E4E3E3',
      },
    },
  },
  plugins: [],
}


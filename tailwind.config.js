/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss,css}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        hover: '#E33B47',
        active: '#E33B47',
        gradient_start: '#F19945',
        gradient_end: '#DA0048'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif']
      }
    }
  },
  plugins: []
}

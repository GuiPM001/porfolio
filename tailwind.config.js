/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      dosis: 'Dosis'
    },
    extend: {
      boxShadow: {
        'all': '0px 0px 15px -5px rgba(0, 0, 0, 0.3)',
        'circle': '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%' : { opacity: 0 },
          '100%' : { opacity: 100 }
        }
      },
      animation: {
        wiggle: 'wiggle 7.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s both'
      }
    },
  },
  plugins: [],
}
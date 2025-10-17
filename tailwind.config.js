/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'love-pink': '#FFB6C1',
        'soft-pink': '#FFC0CB',
        'deep-pink': '#FF69B4'
      },
      fontFamily: {
        'cute': ['Nunito', 'sans-serif'],
        'handwriting': ['Dancing Script', 'cursive']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'heart-rain': 'heart-rain 10s linear infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'heart-rain': {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px theme("colors.love-pink")' },
          '50%': { boxShadow: '0 0 20px theme("colors.deep-pink")' }
        }
      }
    }
  },
  plugins: [],
}
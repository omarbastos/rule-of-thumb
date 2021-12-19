const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Lato"', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-gray':
          'linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 18%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);',
        'black-transparency':
          'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%,  rgba(0, 0, 0, 0.6) 0%);',
        'thumb-up':
          'linear-gradient(90deg, rgba(60, 187, 180, 0.8) 0%,  rgba(60, 187, 180, 0.8) 0%);'
      },

      colors: {
        ...colors,
        'thumb-down': {
          DEFAULT: '#FBBD4A',
          200: '#FFD764'
        },
        'dark-gray': '#888888',
        'very-dark-gray': '#333333',
        'thumb-up': {
          200: '#56D5CE'
        }
      },
      maxWidth: {
        screen: '100vw'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}

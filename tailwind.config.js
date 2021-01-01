const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    container: {
      center: true,
      padding: '2rem',
    },

    extend: {

      fontFamily: {
         'JetBrains': ['JetBrains Mono', 'monospace']

      },



      colors: {
        blue: {
          '100': '#72c1df',
          '200': '#5bb7d9',
          '300': '#43add4',
          '400': '#2ca2ce',
          '500': '#1498c9',
          '600': '#1289b5',
          '700': '#107aa1',
          '800': '#0e6a8d',
          '900': '#0c5b79'
        },
        gold: {
          light: '#ddbf5f',
          base: '#d4af37',
          dark: '#aa8c2c'
        },
        IceCream: {
          light: '#fff6d3',
          middle: '#f9a875',
          base: '#eb6b6f',
          dark: '#7c3f58'
        },

        Nyx8: {
          '100': '#f6d6bd',
          '200': '#c3a38a',
          '300': '#997577',
          '400': '#816271',
          '500': '#4e495f',
          '600': '#20394f',
          '700': '#0f2a3f',
          '800': '#08141e'
        },
        SLSO8: {
          '100': '#ffecd6',
          '200': '#ffd4a3',
          '300': '#ffaa5e',
          '400': '#d08159',
          '500': '#8d697a',
          '600': '#544e68',
          '700': '#203c56',
          '800': '#0d2b45',
          '900': '#d6c7c8'
        },
        Smoke: {
          '100': '#ffffff',
          '200': '#efe1cc',
          '300': '#d8b686',
          '400': '#bc8a45',
          '500': '#9f6624',
          '600': '#784420',
          '700': '#532620',
          '800': '#3a1220'
        },

        Swamp: {
          '100': '#928e89',
          '200': '#4e4f4a',
          '300': '#575642',
          '400': '#424131',
          '500': '#3d3c39',
          '600': '#353231',
          '700': '#2c2916',
          '800': '#1d1d1d'
        },

        
        JUSTPARCHMENT8: {
        '100': '#e6ceac',
        '200': '#cdba94',
        '300': '#bda583',
        '400': '#a48d6a',
        '500': '#8b7d62',
        '600': '#73654a',
        '700': '#524839',
        '800': '#292418'
        },
        


      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


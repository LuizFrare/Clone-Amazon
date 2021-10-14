module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'arial':'Arial',
      },
      colors:{
        'dark-blue-400':'#37475a',
        'darkblue-500':'#485769',
        'dark-blue-600':'#232f3e',
        'dark-blue-700':'#232F3E',
        'dark-blue-900':'#191E26',
        'dark-blue-950':'#131A22',
        'gold-100':'#FEBD69',
        'gold-200':'#FAA63A',
        'orange-650':'#E47911',
        'yellow-350':'#F0C14B',
      },
      spacing:{
        '7':'1.75rem',
        '75px':'75px',
        '210':'210px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

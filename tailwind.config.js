module.exports = {
  purge: ['./public/index.html', './public/index.js'],
  theme: {
    extend: {
      colors: {
        'apple-gray': {
          'light': 'rgb(110, 110, 115)',
          'default': 'rgb(51, 51, 51)',
          'dark': 'rgb(29, 29, 31)'
        }
      },
      height: {
        '23/2': '2.875rem',
        '13': '3.25rem',
        '30px': '30px',
        '90vh': '90vh',
      },
      width: {
        '8/10': '80%',
        '7/10': '70%',
        '14/15': '93.333333333333%',   
        '23/2': '2.875rem',
        '30px': '30px'
      },
      minWidth: {
        '320px': '320px'
      },
      maxWidth: {
        '1000px': '1000px'
      },
      lineHeight: {
        '11': '2.75rem'
      },
      translate: {
        '2px': '2px',
        '-4px': '-4px'
      },
      padding: {
        '1/2': '0.125rem'
      },
      fontSize: {
        'md': '1.0625rem'
      },
      borderWidth: {
        '1/2': '0.5px'
      }
    },
  },
  variants: {},
  plugins: [],
}

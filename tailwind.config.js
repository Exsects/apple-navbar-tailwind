module.exports = {
  purge: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        'apple-gray': {
          'light': 'rgb(110, 110, 115)',
          'default': 'rgba(45, 45, 45, 0.98)',
          'dark': 'rgb(29, 29, 31)'
        }
      },
      height: {
        '11': '2.875rem',
        '13': '3.25rem',
        '30px': '30px'
      },
      width: {
        '8/10': '80%',
        '14/15': '93.333333333333%',   
        '11': '2.875rem',
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

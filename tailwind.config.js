module.exports = {
  purge: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        'apple-gray': 'rgba(45, 45, 45, 0.98)'
      },
      height: {
        '11': '2.875rem',
        '30px': '30px'
      },
      width: {
        '8/10': '80%',
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
      }
    },
  },
  variants: {
    maxWidth: ['responsive'],
  },
  plugins: [],
}

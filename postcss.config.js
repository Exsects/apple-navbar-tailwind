const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({ preset: 'default' });

console.log(process.env.NODE_ENV)
module.exports = {
    plugins: [
      tailwindcss,
      autoprefixer,
      ...process.env.NODE_ENV === 'production'
      ? [cssnano]
      : []
    ]
  }

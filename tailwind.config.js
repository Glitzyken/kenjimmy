/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        kjColorPrime: '#d1412a',
        kjColorPrimeLight: '#d8c7b8',
        kjColorLight: '#f2f0ee',
        kjColorDark: '#2b2929',
        kjColorSecondaryLight: '#bab6b5',
        kjColorSecondary: '#607393',
        kjColorGold: '#e29d51'
      },
      fontFamily: {
        sans: ['Roboto']
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
};

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      backgroundColor: {
        'black-t-50': 'rgba(0, 0, 0, 0.5)'
      },
      colors: {
        kjColorRedLight: '#f3c6dd',
        kjColorPrime: '#e45447',
        kjColorPrimeLight: '#d8c7b8',
        kjColorLight: '#f2f0ee',
        kjColorDark: '#2b2929',
        kjColorGray: '#58595b',
        kjColorSecondaryLight: '#bab6b5',
        kjColorSecondary: '#607393',
        kjColorGold: '#e29d51'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      height: {
        '128': '320px'
      },
      width: {
        '128': '320px'
      }
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-dark-mode')()
  ],
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
  },
  future: {
    removeDeprecatedGapUtilities: true
  }
};

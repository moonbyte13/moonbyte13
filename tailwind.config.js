const daisyui = require('daisyui')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Add DaisyUI plugin
    ...daisyui.postcssPlugins,
  ],
}

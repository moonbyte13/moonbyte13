const daisyui = require('daisyui')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...daisyui.postcssPlugins({
      // Add options here
    }),
  ],
}

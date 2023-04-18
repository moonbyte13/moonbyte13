module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-modules': {
      generateScopedName: '[local] [hash:base64:5]',
    },
  },
};

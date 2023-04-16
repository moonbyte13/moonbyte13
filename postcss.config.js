const { createProcessor } = require('@unocss/core');
const responsive = require('@unocss/plugin-responsive');

module.exports = async ({ env }) => {
  const processor = createProcessor({
    theme: {
      extend: {},
    },
    plugins: [responsive()],
  });

  if (env === 'production') {
    await processor.optimize();
  }

  return {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('@unocss/postcss-plugin')({
        config: 'unocss.config.js',
      }),
      require('daisyui'),
    ],
  };
};

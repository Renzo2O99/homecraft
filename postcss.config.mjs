const config = {
  plugins: {
    '@unocss/postcss': {
      content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
      ],
    },
    '@tailwindcss/postcss': {},
    '@pandacss/dev/postcss': {},
  },
};

export default config;

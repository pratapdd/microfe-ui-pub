const env = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = {
  presets: [
    '@babel/typescript',
    [
      '@babel/preset-react',
      // Adds __self attribute to JSX which React will use for some warnings
      { development: env === 'development' || env === 'test' },
    ],
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],

  plugins: ['@babel/plugin-proposal-class-properties'],
};

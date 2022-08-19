const webpack = require('webpack')
const mix = require('laravel-mix')
const isDevelopment = process.env.NODE_ENV !== 'production'

mix
  .setPublicPath('public')
  .js('resources/frontend/index.js', 'public/js/')
  .react()
  .sass('resources/assets/scss/index.scss', 'public/css/')
  .options({
    processCssUrls: false,
  })

if (isDevelopment) {
  mix.sourceMaps()
}

mix.webpackConfig({
  mode: isDevelopment ? 'development' : 'production',
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
})

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
    node: {
      fs: 'empty',
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
  };
};

var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      '__DEV__': false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader'
      ]
    }]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};

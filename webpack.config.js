const { resolve } = require('path'),
  webpack = require('webpack'),
  env = process.env.NODE_ENV || 'production'

module.exports = {
  entry: 'index.js',
  output: {
    path: resolve(__dirname, 'lib'),
    filename: 'sarcasm.js',
    library: 'sarcasm',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  context: resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js'],
    modules: [
      resolve(__dirname, 'src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
    ]
  },
  "plugins": [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      }
    })
  ]
};

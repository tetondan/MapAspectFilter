
const webpack = require('webpack');

module.exports = {
    context: __dirname + "/client/dev",
    entry: "./index.js",
    output: {
        path: __dirname + "/client/dist",
        filename: "bundle.js"
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
};
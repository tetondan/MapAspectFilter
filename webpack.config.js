module.exports = {
    context: __dirname + "/client/dev",
    entry: "./index.js",
    output: {
        path: __dirname + "/client/dist",
        filename: "bundle.js"
    },
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
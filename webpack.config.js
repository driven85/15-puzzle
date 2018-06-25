const path = require('path')


module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.(c|sa|sc)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'] 
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/'
          }
        }
      ]
    }]
  }
}


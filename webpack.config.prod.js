const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = webpackMerge(commonConfig(), {
  plugins: [
    new CleanWebpackPlugin(['build']),
  ]
})


const path = require('path')
const webpack = require('webpack')

const config = {
  entry: path.join(__dirname, './public/javascripts/flashcards.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public/javascripts/')
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map',
  mode: 'development'
}

module.exports = config

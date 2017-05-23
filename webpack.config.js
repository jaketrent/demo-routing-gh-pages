const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  entry: {
    index: './index.js'
  },

  output: {
    filename: 'index.js',
    path: path.resolve(path.join('docs')),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      basename: '/demo-routing-gh-pages',
      crawl: true
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'docs')
  }
}

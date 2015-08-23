// LIST OF LOADERS: http://webpack.github.io/docs/list-of-loaders.html
// WEBPACK DEV SERVER: http://webpack.github.io/docs/webpack-dev-server.html

// TUTORIALS:
  // - http://christianalfoni.github.io/react-webpack-cookbook/index.html
  // - http://putaindecode.fr/posts/webpack/premier-exemple/
  // - http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
  // - http://www.occitech.fr/blog/2015/03/webpack-react-es6/

// TO SEE:
  // - http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
  // - http://survivejs.com/webpack_react/webpack_and_react/
  // - https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

/* eslint-disable */

var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var pathToFontAwesome = path.resolve(nodeModulesDir, 'font-awesome');
var pathToReact = path.resolve(nodeModulesDir, 'react/dist/react.min.js');
var pathToJQuery = path.resolve(nodeModulesDir, 'jquery/dist/jquery.min.js');
// https://www.npmjs.com/package/html-webpack-plugin
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// https://github.com/webpack/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: ['webpack/hot/dev-server', './js/index.js'],
    html: ['./index.html', './404.html']
  },
  // Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
  resolve: {
    alias: {
      'jquery': pathToJQuery
    }
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    // Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
    noParse: [pathToJQuery],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
      // ,
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: 'file?name=[path][name].[ext]&context=./src'
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
    // new HtmlWebpackPlugin({
    //   title: 'React Boilerplate'
    // })
  ]
};

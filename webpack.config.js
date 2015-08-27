// LIST OF LOADERS: http://webpack.github.io/docs/list-of-loaders.html
// WEBPACK DEV SERVER: http://webpack.github.io/docs/webpack-dev-server.html
// webpack for browserify users: https://github.com/webpack/docs/wiki/webpack-for-browserify-users
// webpack + font-awesome: https://gist.github.com/Turbo87/e8e941e68308d3b40ef6

// TUTORIALS:
  // - http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/
  // - http://christianalfoni.github.io/react-webpack-cookbook/index.html
  // - http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
  // - http://putaindecode.fr/posts/webpack/premier-exemple/
  // - http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
  // - http://www.occitech.fr/blog/2015/03/webpack-react-es6/
  // - http://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/
  // - http://bensmithett.com/smarter-css-builds-with-webpack/

/* eslint-disable */

var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var pathToFontAwesome = path.resolve(nodeModulesDir, 'font-awesome');
var pathToReact = path.resolve(nodeModulesDir, 'react/dist/react.min.js');
var pathToJQuery = path.resolve(nodeModulesDir, 'jquery/dist/jquery.min.js');
// https://github.com/webpack/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    javascript: ['webpack/hot/dev-server', './app/js/index.js'],
    html: ['./app/index.html', './app/404.html']
  },
  resolve: {
    // Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
    alias: {
      'jquery': pathToJQuery
    },
    // Resolve the `./app` directory so we can avoid writing
    // ../../styles/base.css but styles/base.css
    modulesDirectories: ['node_modules', './app']
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:9090/build/'
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
        loaders: ['json'],
        exclude: /node_modules/
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

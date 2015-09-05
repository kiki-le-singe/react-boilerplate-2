// LIST OF LOADERS: http://webpack.github.io/docs/list-of-loaders.html
// WEBPACK DEV SERVER: http://webpack.github.io/docs/webpack-dev-server.html
// webpack for browserify users: https://github.com/webpack/docs/wiki/webpack-for-browserify-users
// webpack + font-awesome: https://gist.github.com/Turbo87/e8e941e68308d3b40ef6

// TUTORIALS:
  // - webpack-dev-server and a node server
    // - http://ctheu.com/2015/05/14/using-react-hot-loader-with-a-webpack-dev-server-and-a-node-server/
    // - http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup
  // - http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/
  // - http://christianalfoni.github.io/react-webpack-cookbook/index.html
  // - http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
  // - http://putaindecode.fr/posts/webpack/premier-exemple/
  // - http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
  // - http://www.occitech.fr/blog/2015/03/webpack-react-es6/
  // - http://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/
  // - http://bensmithett.com/smarter-css-builds-with-webpack/

/* eslint-disable */

// PACKAGES
var webpack = require('webpack');
var path = require('path');
// https://github.com/webpack/extract-text-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// PATHS/DIRECTORIES
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var FontAwesomeSCSSDir = path.resolve(nodeModulesDir, 'font-awesome/scss');
var NormalizeDir = path.resolve(nodeModulesDir, 'node.normalize.scss');
var pathToReact = path.resolve(nodeModulesDir, 'react/dist/react.min.js');
var pathToJQuery = path.resolve(nodeModulesDir, 'jquery/dist/jquery.min.js');
var pathToFontAwesome = path.resolve(nodeModulesDir, 'font-awesome/css/font-awesome.min.css');

module.exports = {
  entry: {
    javascript: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './app/js/index.js'
    ]
  },
  resolve: {
    // Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
    alias: {
      'jquery': pathToJQuery,
      'font-awesome.scss': pathToFontAwesome
    },

    // Resolve the `./app` directory so we can avoid writing
    // ../../styles/base.css but styles/base.css
    modulesDirectories: ['node_modules', './app'],

    // https://github.com/webpack/docs/wiki/configuration#resolveroot
    // See: http://stackoverflow.com/questions/27502608/resolving-require-paths-with-webpack
    root: [FontAwesomeSCSSDir, NormalizeDir],
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    // Optimizing rebundling: http://christianalfoni.github.io/react-webpack-cookbook/Optimizing-rebundling.html
    noParse: [pathToJQuery, pathToFontAwesome],

    // http://webpack.github.io/docs/loaders.html
    // http://webpack.github.io/docs/list-of-loaders.html
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?optional[]=runtime&stage=0', 'eslint'],
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
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),

    // switch the server to hot mode
    new webpack.HotModuleReplacementPlugin(),

    // see: http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html#chunks
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
  ]
};

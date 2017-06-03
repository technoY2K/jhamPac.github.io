// Dependencies
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[hash:4].css');
const extractSCSS = new ExtractTextPlugin('css/[hash:4].css');

// Webpack variables
let isProduction = process.env.NODE_ENV === 'production';
let cssDev = ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, { loader: 'postcss-loader', options: { sourceMap: true } }];
let cssProd = ExtractTextPlugin.extract( { fallback: 'style-loader', use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, { loader: 'postcss-loader', options: { sourceMap: true } }] } );
let scssDev = ['style-loader', 'css-loader', 'resolve-url-loader', {loader: 'sass-loader', options: { sourceMap: true }}, 'import-glob-loader' ];
let scssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'resolve-url-loader', {loader: 'sass-loader', options: { sourceMap: true }}, 'import-glob-loader' ]
});

const DISTPATH  = path.join(__dirname, '/');
const ENTRYFILE = path.join(__dirname, 'src/main.js');

const RULES = [

  {test: /\.(jsx?)$/, exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react'],
        plugins: [require('babel-plugin-transform-class-properties')]
      }
    }
  },

  { test: /\.css$/, use: (isProduction) ? cssProd : cssDev  },

  { test: /\.scss$/, use: (isProduction) ? scssProd : scssDev },

  { test: /\.(png|gif|jpg|svg)$/, use: [{loader: 'file-loader', options: {name: 'icons/[name].[ext]'}}, {loader: 'image-webpack-loader'}] },

  { test: /\.(eot|ttf|woff|woff2)$/, use: [{loader: 'url-loader', options: {limit: '10000', name: 'fonts/[name].[ext]'}}] }
]

let PLUGINS = [
  new HtmlWebpackPlugin({
    minify: {collapseWhitespace: false},
    template: './src/index.html'
  }),

  new webpack.NamedModulesPlugin(),

  new ExtractTextPlugin({
    disable: !isProduction,
    filename: 'css/[hash].css',
    allChunks: true
  }),

];

if ( !isProduction ) {
  PLUGINS.push(new webpack.HotModuleReplacementPlugin());
}

// Webpack settings start here
////////////////////////////////////////////////////////////////////////////////

module.exports = {

  entry: {
    // we don't need dev server stuff for production builds.
    main: isProduction ? ENTRYFILE : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      ENTRYFILE
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [path.resolve('./node_modules')],
    alias: {
      Comps: path.resolve(__dirname, './src/js/comps'),
      Icons: path.resolve(__dirname, './src/icons'),
      Utils: path.resolve(__dirname, './src/js/utils')
    }
  },

  output: {
    filename: '[name].bundle.js',
    path: DISTPATH,
    publicPath: ''
  },

  module: {
    rules: RULES
  },

  // build speed plz
  devtool: isProduction ? 'cheap-module-source-map' : 'source-map',

  devServer: {
    contentBase: DISTPATH,
    hot: true,
    publicPath: '/',
    stats: 'errors-only'
  },

  plugins: PLUGINS

}

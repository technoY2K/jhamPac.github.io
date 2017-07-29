// Dependencies
const PATH = require('path');
const CSS_TEXT_EXTRACT = new ExtractTextPlugin('css/[hash:4].css');
const SCSS_TEXT_EXTRACT = new ExtractTextPlugin('css/[hash:4].css');
let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// Webpack variables
let is_production = process.env.NODE_ENV === 'production';

let development_css = ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, { loader: 'postcss-loader', options: { sourceMap: true } }];

let production_css = ExtractTextPlugin.extract( { fallback: 'style-loader', use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, { loader: 'postcss-loader', options: { sourceMap: true } }] } );

let development_scss = ['style-loader', 'css-loader', 'resolve-url-loader', {loader: 'sass-loader', options: { sourceMap: true }}, 'import-glob-loader' ];

let production_scss = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'resolve-url-loader', {loader: 'sass-loader', options: { sourceMap: true }}, 'import-glob-loader' ]
});

const DISTPATH  = PATH.join(__dirname, '/');
const ENTRYFILE = PATH.join(__dirname, 'src/main.js');

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

  { test: /\.css$/, use: (is_production) ? production_css : development_css  },

  { test: /\.scss$/, use: (is_production) ? production_scss : development_scss },

  { test: /\.(png|gif|jpg|svg)$/, use: [{loader: 'file-loader', options: {name: 'images/[name].[ext]'}}, {loader: 'image-webpack-loader'}] },

  { test: /\.(eot|ttf|woff|woff2)$/, use: [{loader: 'url-loader', options: {limit: '10000', name: 'fonts/[name].[ext]'}}] }
];

const PLUGINS = [
  new HtmlWebpackPlugin({
    minify: {collapseWhitespace: false},
    template: './src/index.html'
  }),

  new Webpack.NamedModulesPlugin(),

  new ExtractTextPlugin({
    disable: !is_production,
    filename: 'css/[name].css',
    allChunks: true
  }),

];

if ( !is_production ) {
  PLUGINS.push(new Webpack.HotModuleReplacementPlugin());
}

// Webpack settings start here
////////////////////////////////////////////////////////////////////////////////

module.exports = {

  entry: {
    // we don't need dev server stuff for production builds.
    main: is_production ? ENTRYFILE : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      ENTRYFILE
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [PATH.resolve('./node_modules')],
    alias: {
      Comps: PATH.resolve(__dirname, './src/js/comps'),
      Images: PATH.resolve(__dirname, './src/images'),
      Utils: PATH.resolve(__dirname, './src/js/utils')
    }
  },

  output: {
    filename: '[name].bundle.js',
    path: DISTPATH,
    publicPath: '/'
  },

  module: {
    rules: RULES
  },

  // build speed plz
  devtool: is_production ? 'cheap-module-source-map' : 'source-map',

  devServer: {
    contentBase: DISTPATH,
    hot: true,
    publicPath: '/',
    stats: 'errors-only'
  },

  plugins: PLUGINS

}

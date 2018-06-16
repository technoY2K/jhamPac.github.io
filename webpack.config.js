// Dependencies
let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATH = require('path');
const CSS_TEXT_EXTRACT = new ExtractTextPlugin('css/[hash:4].css');
const SCSS_TEXT_EXTRACT = new ExtractTextPlugin('css/[hash:4].css');

// Webpack variables
let isProduction = process.env.NODE_ENV === 'production';

let devCSS = [
  'style-loader',
  { loader: 'css-loader',     options: { importLoaders: 1 } },
  { loader: 'postcss-loader', options: { sourceMap: true } }
];

let prodCSS = ExtractTextPlugin.extract(
  { fallback: 'style-loader',
    use: [
      { loader: 'css-loader',     options: { importLoaders: 1 } },
      { loader: 'postcss-loader', options: { sourceMap: true } }
    ]
  }
);

let devSCSS = [
  'style-loader',
  'css-loader',
  'resolve-url-loader',
  { loader: 'sass-loader', options: { sourceMap: true } },
  'import-glob-loader'
];

let prodSCSS = ExtractTextPlugin.extract(
  { fallback: 'style-loader',
    use: [
      'css-loader',
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true } },
      'import-glob-loader'
    ]
  }
);

const DISTPATH  = PATH.join(__dirname, '/');
const ENTRYFILE = PATH.join(__dirname, 'src/main.js');

const RULES = [

  { test: /\.(jsx?)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },

  { test: /\.css$/, use: (isProduction) ? prodCSS : devCSS  },

  { test: /\.scss$/, use: (isProduction) ? prodSCSS : devSCSS },

  { test: /\.(png|gif|jpg)$/, use: [
      { loader: 'file-loader', options: { name: 'images/[name].[ext]' }},
      { loader: 'image-webpack-loader'}
    ]
  },

  { test: /\.svg$/, use: [
      { loader: 'url-loader', options: { limit: '10000', name: 'icons/[name].[ext]'}}
    ]
  },

  { test: /\.(eot|ttf|woff|woff2)$/, use: [
      { loader: 'url-loader', options: { limit: '10000', name: 'fonts/[name].[ext]'}}
    ]
  }
];

const PLUGINS = [
  new HtmlWebpackPlugin({
    minify: {collapseWhitespace: false},
    template: './src/index.html'
  }),

  new Webpack.NamedModulesPlugin(),

  new ExtractTextPlugin({
    disable: !isProduction,
    filename: 'css/[name].css',
    allChunks: true
  }),

];

if ( !isProduction ) {
  PLUGINS.push(new Webpack.HotModuleReplacementPlugin());
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
    modules: [PATH.resolve('./node_modules')],
    alias: {
      Comps: PATH.resolve(__dirname, './src/js/comps'),
      Images: PATH.resolve(__dirname, './src/images'),
      Icons: PATH.resolve(__dirname, './src/icons'),
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
  devtool: isProduction ? 'cheap-module-source-map' : 'source-map',

  devServer: {
    contentBase: DISTPATH,
    hot: true,
    publicPath: '/',
    stats: 'errors-only'
  },

  plugins: PLUGINS

}

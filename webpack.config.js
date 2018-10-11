const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const PATH = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const SCSS = [
    isProduction ? MiniCSSPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader',
    'resolve-url-loader',
    { loader: 'sass-loader', options: { sourceMap: true } },
    'import-glob-loader'
  ];

const DISTPATH  = PATH.join(__dirname, '/');
const ENTRYFILE = PATH.join(__dirname, 'src/main.js');

const RULES = [

  { test: /\.(jsx?)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },

  { test: /\.scss$/, use: SCSS },

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

  new MiniCSSPlugin({
    filename: 'css/[name].css'
  }),

];

if (isProduction === false) {
  PLUGINS.push(new Webpack.HotModuleReplacementPlugin());
}

// Webpack settings start here
////////////////////////////////////////////////////////////////////////////////

module.exports = {

  entry: {
    main: isProduction ? ENTRYFILE : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      ENTRYFILE
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [PATH.resolve('./node_modules')],
    alias: {
      comps: PATH.resolve(__dirname, './src/js/comps'),
      images: PATH.resolve(__dirname, './src/images'),
      icons: PATH.resolve(__dirname, './src/icons'),
      utils: PATH.resolve(__dirname, './src/js/utils')
    }
  },

  output: {
    filename: '[name].bundle.js',
    path: DISTPATH,
    publicPath: '/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },

  module: {
    rules: RULES
  },

  devtool: isProduction ? 'cheap-module-source-map' : 'source-map',

  devServer: {
    contentBase: DISTPATH,
    hot: true,
    publicPath: '/',
    stats: 'errors-only'
  },

  plugins: PLUGINS
}

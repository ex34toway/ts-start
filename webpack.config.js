const path = require('path');
const CleanPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const AssetsPlugin = require('assets-webpack-plugin');


var assetsPluginInstance = new AssetsPlugin()

const SOURCE = /src/;

module.exports = {

  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'assets/[name]-bundle-[hash].js',
    path: path.resolve('./dist'),
    publicPath: ''
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    loaders: [
      { enforce: 'pre', test: /\.js$/, loaders: 'source-map-loader', include: [SOURCE] },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader', include: [SOURCE] },
      { test: /\.js$/, loader: 'babel-loader', include: [SOURCE] },
      { test: /\.jsx$/, loader: 'babel-loader', include: [SOURCE] },
      {
        test: /\.less$/, loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!less-loader'
        })
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'assets/[name].css',
      allChunks: true
    }),
    assetsPluginInstance,
    new CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new CleanPlugin(['dist']),
  ]
}
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',
  debug: true, 
  entry: {
    app: "./app/app",
    vendor: "./app/vendor"  
  },
  output: {
    path: __dirname + "/dist", publicPath: 'dist/', filename: "[name].js" 
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.jpg', '.jpeg', '.gif', '.png', '.css']
  },
  module: {
    loaders: [
        { test: /\.(jpg|jpeg|gif|png)$/, loader:'file-loader?name=img/[path][name].[ext]' },
        { test: /\.css$/, loader:'raw-loader' },
        { test: /\.html$/,  loaders: ['html-loader'] },
        { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [ 
     new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity })  
  ], 
  node: {
    __filename: true  
  },
  devServer: {
    inline: true
  }
};
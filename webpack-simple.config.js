module.exports = {
  devtool: 'source-map',
  debug: true, 
  entry: {
    app: "./app/app"
  },
  output: {
    path: __dirname + "/dist", 
    publicPath: 'dist/', 
    filename: "[name].js" 
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
        { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/}
    ]
  }, 
  node: {
    __filename: true  
  },
  devServer: {
    inline: true
  }
};
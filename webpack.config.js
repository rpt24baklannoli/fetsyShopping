module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
***REMOVED***
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
   ***REMOVED*****REMOVED***
    ***REMOVED***,
    ***REMOVED***
***REMOVED***
***REMOVED***
  devtool: 'source-map',
***REMOVED***;






// webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx', // точка входа, о которой говорилось ранее.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    // static: {
    //     directory: path.join(__dirname, 'public'),
    //   },
    compress: true,
    hot: true,
    port: 3001,
  },
  devtool: 'eval-source-map', // создает высококачественные карты кода
}

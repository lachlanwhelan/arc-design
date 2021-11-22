const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: "/"
  },
  
  devServer:{
    static: "./public"
  },

  module: {
    rules:[
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      
    })
  ]
};
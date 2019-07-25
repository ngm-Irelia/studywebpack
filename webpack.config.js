const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成index文件
//const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename:"index.html", 
      templete:'src/index.html' 
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader:'babel-loader',
            options:{
              presets:['react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit:10000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
         'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  devServer:{
    open:true, //自动打开浏览器
    port:8082,
  }
};
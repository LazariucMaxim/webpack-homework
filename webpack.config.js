const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: './main.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          })
      ]
};
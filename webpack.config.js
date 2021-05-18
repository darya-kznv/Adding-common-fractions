const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
require('babel-polyfill');

module.exports = {
    mode: 'development',
    entry: {
        index: ['babel-polyfill', './src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],

    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ],
}

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: [
		"babel-polyfill",
		"whatwg-fetch",
		"./src/index"
		],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: 'dist/',
		chunkFilename: '[name].chunk.js?v=[chunkhash:18]'
	},
	devtool: "source-map",
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': "'dev'"
			}
		}),
        new HtmlWebpackPlugin({
			filename: '../index.html',
			hash: true
		})
	],
	module: {
		loaders: [
			// js
			{
				test: /\.js$/,
				loaders: [ 'babel' ],
				include: path.join(__dirname, 'src')
			}
		]
	}
};

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {presets: ['@babel/preset-env']}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{loader: miniCssExtractPlugin.loader},
					'css-loader', 'postcss-loader', 'sass-loader'
				]
			}
		]
	},
	plugins: [
		new miniCssExtractPlugin({
			filename: '[name].css'
		})
	]
});

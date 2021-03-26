const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./app/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Paris Events",
			template: "index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: "asset/resource",
			},
		],
	},
};

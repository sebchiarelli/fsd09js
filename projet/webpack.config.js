const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
	const config = {
		entry: "./app/main.js",
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "dist"),
		},
		plugins: [
			new CleanWebpackPlugin(),
			new CopyPlugin({
				patterns: [{ from: "views", to: "views" }],
			}),
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
					generator: {
						filename: "static/images/[hash][ext][query]",
					},
				},
			],
		},
	};
	// si on est en mode development, activer la source map
	if (argv.mode === "development") {
		config.devtool = "source-map";
	}
	return config;
};

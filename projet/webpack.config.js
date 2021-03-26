const path = require("path");

module.exports = {
	entry: "./app/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
};

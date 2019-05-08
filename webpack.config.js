const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LIB_DIR = path.resolve(__dirname, 'src/components');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');
const libraryName = 'x-buttons-lib';
const outputFile = `${libraryName}.js`;


module.exports = env => {
	const isProd = env && env.production;
	const ENV_DIR = isProd ? LIB_DIR : APP_DIR;
	const getExternals = () => {
		if (isProd) {
			return [nodeExternals()];
		}
	};

	return {
		entry: {
			main: `${ENV_DIR}/index.js`
		},
		devServer: {
			contentBase: BUILD_DIR,
			publicPath: '/js/',
			historyApiFallback: true,
		},
		output: {
			filename: outputFile,
			path: `${BUILD_DIR}/js`,
			library: libraryName,
			libraryTarget: 'umd',
		},
		externals: getExternals(),
		module: {
			rules: [
				{
					test: /\.(scss)$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					],
				},
				{
					test: /\.jsx?$/,
					include: [
						ENV_DIR,
					],
					loader: 'babel-loader'
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					loader: 'base64-image-loader',
					include : ENV_DIR,
					options: {
						name: '[name]-[sha256:hash:base64:4].[ext]',
						publicPath: 'images/loader/',
						outputPath: '../images/loader/'
					}
				},
			]
		},
	};
};
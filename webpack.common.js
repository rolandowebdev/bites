const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminPlugin = require('imagemin-webp-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=100000',
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 20000,
			maxSize: 70000,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: '~',
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	devServer: {
		disableHostCheck: true,
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/'),
				},
			],
		}),
		new InjectManifest({
			swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
		}),
		new ImageminPlugin({
			config: [
				{
					test: /\.(jpe?g|png)(\?[a-z0-9=.]+)?$/,
					options: {
						quality: 50,
					},
				},
			],
			overrideExtension: true,
		}),
		new WebpackPwaManifest({
			name: 'Bites',
			short_name: 'Bites',
			description: 'Bites is a food delivery app',
			background_color: '#71DFE7',
			start_url: '/index.html',
			display: 'standalone',
			theme_color: '#ff8303',
			crossorigin: 'use-credentials',
			icons: [
				{
					src: path.resolve('src/public/icons/icon-72x72.png'),
					size: '72x72',
				},
				{
					src: path.resolve('src/public/icons/icon-96x96.png'),
					size: '96x96',
				},
				{
					src: path.resolve('src/public/icons/icon-128x128.png'),
					size: '128x128',
				},
				{
					src: path.resolve('src/public/icons/icon-144x144.png'),
					size: '144x144',
				},
				{
					src: path.resolve('src/public/icons/icon-152x152.png'),
					size: '152x152',
				},
				{
					src: path.resolve('src/public/icons/icon-192x192.png'),
					size: '192x192',
				},
				{
					src: path.resolve('src/public/icons/icon-384x384.png'),
					size: '384x384',
				},
				{
					src: path.resolve('src/public/icons/icon-512x512.png'),
					size: '512x512',
				},
			],
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'json',
			openAnalyzer: false,
		}),
	],
};

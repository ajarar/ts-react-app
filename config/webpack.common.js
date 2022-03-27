const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, '..', 'src/index.tsx'),
    },
    stats: 'errors-only',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }, // ! this to allows us to import file without extenstions
    output: {
        path: path.resolve(__dirname, '../', 'public'),
        filename: '[name]-[fullhash].js',
        clean: true, // ! to clean the folder every bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resourcePath) =>
                                    resourcePath.endsWith('module.css'),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|png|jpg|jpeg)/,
                type: 'asset/resource',
            }, //! to load image
            {
                test: /\.(woff(2)?|eot|tff|otf|svg|)$/,
                type: 'asset/inline',
            }, //! to load fonts and svg
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
            meta: {
                charset: { charset: 'utf-8' },
                viewport: 'width=device-width, initial-scale=1',
            },
            inject: 'body',
        }), // ! inject js files in index HTML
        new copyPlugin({
            patterns: [{ from: 'source', to: 'dist' }],
        }),
        new WebpackBar(),
    ],
}

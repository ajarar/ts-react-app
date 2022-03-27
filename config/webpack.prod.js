const bundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isAnalyzer = process.argv.includes('analyzer')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [isAnalyzer && new bundleAnalyzer()].filter(Boolean),
}

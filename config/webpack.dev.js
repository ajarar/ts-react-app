const path = require('path')
const reactHotRefresh = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        static: path.resolve(__dirname, '../', 'public'),
        hot: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        open: true,
        port: 3000,
    },
    plugins: [new reactHotRefresh()],
}

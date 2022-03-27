const { merge } = require('webpack-merge')
const commaConfig = require('./webpack.common')

module.exports = (envVar) => {
    const { env } = envVar
    const envConfig = require(`./webpack.${env}`)
    return merge(envConfig, commaConfig)
}

const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const dllReference = (config) => {
    config.plugin('vendorDll')
        .use(webpack.DllReferencePlugin, [{
            context: __dirname,
            manifest: require('./public/vendor/vendor-manifest.json')
        }])

    config.plugin('addAssetHtml')
        .use(AddAssetHtmlPlugin, [
            [
                {
                    filepath: path.resolve(__dirname, './public/vendor/*.js'),
                    outputPath: './vendor',
                    publicPath: './vendor'
                },
            ]
        ])
        .after('html')
}

module.exports = {
    publicPath: './',
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, // 打包后隐藏源码
    chainWebpack: config => {
        // 开发环境开启后会导致devtools失效
        if (process.env.NODE_ENV === 'production') {
            dllReference(config)
        }
    },
    // 删除生产环境的所有console
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
        }
    }
}
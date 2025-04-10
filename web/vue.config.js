const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    lintOnSave: false,  //语法检查工具，但限制太过于严格
    transpileDependencies: true,
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/': ''
                }
            },
        }
        // before: app => {}
    }, // 第三方插件配置



    chainWebpack(config) {
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }









})

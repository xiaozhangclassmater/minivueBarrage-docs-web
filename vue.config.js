const { defineConfig } = require('@vue/cli-service')
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: path.resolve(__dirname, './docs'),
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/icons')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/styles/variables.scss";
        @import "~@/styles/theme.scss";
        @import "~@/styles/mixins.scss";
        `
      }
    }
  },
  configureWebpack: {
    entry: './src/main.js',
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'miniVueBarrage-docs',
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        isProduction ? new TerserPlugin({
          terserOptions: {
            nameCache: true,
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"] // 移除console
            },
            output: {
              beautify: true, // 压缩注释
              comments: false,
            }
          }
        }
        ) : null
      ]
    },

    plugins: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
    ]
  }
})

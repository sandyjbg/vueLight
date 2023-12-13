const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/asdf/', // 自己GitHub上的仓库名称两边 / 不能省略
  assetsDir: 'static', // 静态资源（js、css等）存放路径，相对outputDir
})

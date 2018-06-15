module.exports = {
  devServer: {
    port:8006,
    proxy:{
      '/dptApp': {
        target: 'http://wade.99114.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/dptApp': '/dptApp'
        }
      },
    }
  },
  css: {
    // loaderOptions: {
    //   css: {
    //     modules: true,
    //     localIdentName: '[name]-[hash]',
    //     camelCase: 'only'
    //   }
    // }
  },
  configureWebpack: {

  }
}
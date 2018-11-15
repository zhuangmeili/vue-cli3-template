module.exports = {
  devServer: {
    port:8006,
    proxy:{
      '/v2':{
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite: {
          '^/v2' : '/v2'
        },
      }
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
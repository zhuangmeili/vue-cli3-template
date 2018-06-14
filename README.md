这个项目是基于[vue-cli3]创建的.
## vue-cli项目的构建指令
  - npm install -g @vue/cli //全局安装vue-cli
  - vue create projectName  //创建项目

## 常用指令
  - npm run serve  //本地运行项目
  - npm run build
  -
react-redux-demo/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
my-app
├── node_modules
├── tests
├── eslintrc.js
├── .gitignore
├── .postcssrc.js
├── babel.config.js
├── cypress.json
├── package.json
├── README.md
├── public
│   └── img
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── assets
    └── components
    └── views
    └── App.vue
    └── main.js
    └── registerServiceWorker.js
    └── router.js
    └── store.js
```
## css配置
css配置
``` bash
# vue.config.js 配置
module.exports = {
  css: {
    loaderOptions: {
      css: {
        modules: true,
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      }
    }
  }
}
# template
<template>
    <h1 :class="[$style.title]">{{ msg }}</h1>
</template>

# css
<style module lang="scss">
.title {
  margin: 40px 0 0;
  color: red;
}
</style>


# 渲染结果
<h1 class="HelloWorld-feb173eaffe0c4a76b7e74ccb82f86ae">Welcome to Your Vue.js App</h1>


```


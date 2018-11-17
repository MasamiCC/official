// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import {initPlugins} from './init-plugins.js'

import store from './store/store.js' //vuex


//初始化第三方的组件
initPlugins();


Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //判断是引导页
  if(to.path === "/guide") {
    store.dispatch('isGuide', true);
  }else{
    store.dispatch('isGuide', false);
  }
  store.dispatch('changeLoad', true);
  //进行下一步
  next();
})

router.afterEach(function (to) {
  //把load页置为false
  store.dispatch('changeLoad', false);
  //返回顶部
  window.scrollTo(0,0);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //vuex
  components: { App },
  template: '<App/>'
})

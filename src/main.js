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
  store.dispatch('changeLoad', true);
  //进行下一步
  next();
})

router.afterEach(function (to) {
  store.dispatch('changeLoad', false);
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

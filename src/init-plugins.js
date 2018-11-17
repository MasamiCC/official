import Vue from 'vue'
//引入公共css
import '../static/css/common.css'

//引用animate.css
import 'vue2-animate/dist/vue2-animate.min.css';

//引入wow.js
import {WOW} from 'wowjs';

//引入图片懒加载插件
import VueLazyLoad from 'vue-lazyload';

//引入图片轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//引入axios插件
import axios from 'axios'


export const initPlugins = function() {
	//使用插件
  Vue.use(VueLazyLoad,{
    filter:{
     // 通过这个方法可以对我们的图片资源路径进行修改
     // 打包时这个方法需要注释
      // webp(listener,options){
      //   listener.src = '../../' + listener.src;
      // }
    }
  });
  Vue.use(VueAwesomeSwiper);
  Vue.prototype.$http = axios;
  //使用wow.js
  new WOW({
  	boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 200,
	  mobile: false,
	  live: false
  }).init();
}

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


export const initPlugins = function() {
	//使用插件
  Vue.use(VueLazyLoad);
  Vue.use(VueAwesomeSwiper)
  //使用wow.js
  new WOW({
  	boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 200,
	  mobile: false,
	  live: false
  }).init();
}
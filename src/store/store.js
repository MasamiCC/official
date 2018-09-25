import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入 Loading 模块
import Loading from './loading.js'


// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
const store = new Vuex.Store({
	//通过modules属性引入ModuleA模块
  modules: {
    loading: Loading
  }
})
export default store
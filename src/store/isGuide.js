const IsGuide = {
  //数据
  state: {
    isGuide: false,//是否是引导页
  },

  //对数据进行计算的方法
  getter: {

  },

  //提交的一个请求(请求有不同的符号)来个更改数据（state）
  mutations: {
    isGuide(state,flag) {
      state.isGuide = flag
    }
  },

  //用于提交mutaions的方法，可以使用异步
  actions: {
    //改变load的显示
    isGuide({commit},flag){
      commit('isGuide',flag)
    },
  }
}


export default IsGuide;

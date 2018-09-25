const Loading = {
	//数据
	state: {
		isShow: true,//底部bar显示的状态
	},
	
	//对数据进行计算的方法
	getter: {
		
	},
	
	//提交的一个请求(请求有不同的符号)来个更改数据（state）
	mutations: {
		changeLoad(state,flag) {
			state.isShow = flag
		}
	},
	
	//用于提交mutaions的方法，可以使用异步
	actions: {
		//改变load的显示
		changeLoad({commit},flag){
			commit('changeLoad',flag)
		},
	}
}


export default Loading;
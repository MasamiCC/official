<template>
  <div id="app">
		<router-view />
		<Loading v-if="isShow"></Loading>
    <Btns v-if="!isGuide"></Btns>
	</div>
</template>

<script>
	import Loading from './components/loading.vue'
  import Btns from './components/btns.vue'
	export default {
	  name: 'App',
	  //使用模块组件
    components: {
      'Loading': Loading, //加载中模块
      'Btns': Btns, //右侧按钮模块
    },
    computed: {
      // 计算属性的 getter
      isShow: function () {
        return this.$store.state.loading.isShow
      },
      isGuide: function () {
        return this.$store.state.isGuide.isGuide
      }
    }
	}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>

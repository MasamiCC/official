<template>
  <div id="app">
  	<transition name="fade">
		  <router-view />
		</transition> 
		<Loading v-if="isShow"></Loading>
	</div>
</template>

<script>
	import Loading from './components/loading.vue'
	export default {
	  name: 'App',
	  //使用模块组件
    components: {
      'Loading': Loading, //头部模块
    },
    computed: {
    // 计算属性的 getter
    isShow: function () {
      return this.$store.state.loading.isShow
    }
  }
	}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>

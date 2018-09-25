<template>
	<!-- 加入黑卡 -->
		<div class="join_nav bg_lazy" v-lazy:background-image="imgList.bgImg_1">
			<!--加入黑卡模块-->
			<span class="intro_icon"></span>
			<h4 class="title">
				加入黑卡
			</h4>
			<img v-lazy = "imgList.bgImg_2" class="join_us_logo wow fadeIn" data-wow-duration="5s"/>
			<div class="join_us_word">
				<p class="content wow fadeInUp">轻奢黑卡</p>
				<p class="content wow fadeInUp">让消费进行升级</p>
				<p class="content wow fadeInUp">让生活充满惊喜</p>
				<a class="join_us wow fadeInUp">
					加入我们
				</a>
			</div>
		</div>
</template>

<!-- js -->
<script>
  export default {
  	data(){
  		return{
  			imgList:{
	  			bgImg_1: '../../static/img/join_us_bg.png',
	  			bgImg_2: '../../static/img/join_us_logo.png'
	  		}
  		}
  	}
  }
</script>
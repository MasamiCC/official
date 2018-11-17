<template>
	<!-- 底部 -->
	<div class="footer bg_lazy" v-lazy:background-image="imgList.footerImg">
		<div class="footer_first">
			<ul class="footer_ul">
				<li class=""><a href="">首页</a></li>
				<li class=""><a href="">黑卡介绍及展示</a></li>
				<li class=""><a href="">关于我们</a></li>
				<li class=""><a href="">加入我们</a></li>
			</ul>
		</div>
		<div class="erWeiMa">
			<div class="">
				<p class="marginbottom10">APP更优惠</p>
				<p>
					<span class="icon icon_1"></span>
				</p>
			</div>
			<div>
				<p class="marginbottom10">微信服务号</p>
				<p>
					<span class="icon icon_2"></span>
				</p>
			</div>
		</div>
		<div class="company_information">
			<p class="content">
				苏ICP备15038685号-2 增值电信业务经营许可证：苏B2-20160092  <span class="icon"></span>苏公网安备 32060102320644号  电子邮箱 qingshe@592vip.top
			</p>
			<p class="content">
				COPYRIGHT 2016-2017 592VIP. all rights reserved.
			</p>
			<p class="content">
				地址：江苏省南通市通州区星湖大道618号东冠大厦12层
			</p>
			<p class="content">
				电话：400 1588 592
			</p>
		</div>
		<div class="certificate_area">
			<span class="icon icon_1"></span>
			<span class="icon icon_2"></span>
			<span class="icon icon_3"></span>
		</div>
	</div>
</template>

<!-- js -->
<script>
  export default {
  	data(){
  		return{
  			imgList:{
	  			footerImg: '../static/img/footer_bg.png'
	  		}
  		}
  	}
  }
</script>

<template>
  <!--头部导航条-->
	<div class="header">
		<!--内容区域-->
		<div class="header_area">
			<router-link to="/" class="logo_area">
				<img src="../../static/img/logo.png" class="logo" />
			</router-link>
			<!--导航条-->
			<div class="navigation_bar">
				<div class="channel no_child">
					<router-link to="/home" class="word">
					  <span>首页</span>
				  </router-link>
				</div>
				<div class="channel no_child">
					<router-link to="/privilege" class="word">
					  <span>特权服务</span>
				  </router-link>
				</div>
				<div class="channel">
					<router-link to="/blackCard" class="word">
					  <span>黑卡中心</span>
				  </router-link>
					<!--移入弹出层-->
					<div class="channel_hover">
						<router-link to="/blackCard/member" class="channel_child">
							黑卡会员
						</router-link>
						<router-link to="/blackCard/agent" class="channel_child">
							黑卡经纪人
						</router-link>
						<router-link to="/blackCard/contractor" class="channel_child">
							黑卡签约商户
						</router-link>
						<router-link to="/blackCard/join" class="channel_child">
							加入黑卡
						</router-link>
						<router-link to="/blackCard/question" class="channel_child">
							常见问题
						</router-link>
						<router-link to="/blackCard/notice" class="channel_child">
							协议公告
						</router-link>
					</div>
				</div>
				<div class="channel">
					<router-link to="" class="word">
					  <span>关于我们</span>
				  </router-link>
					<!--移入弹出层-->
					<div class="channel_hover">
						<a class="channel_child">公司简介</a>
						<a class="channel_child">产品平台</a>
						<a class="channel_child">团队成员</a>
						<a class="channel_child">媒体报告</a>
						<a class="channel_child">发展轨迹</a>
						<a class="channel_child">慈善基金</a>
						<a class="channel_child">合作伙伴</a>
					</div>
				</div>
				
				<a href="jacascript::void(0)" class="join_us">
					加入我们
				</a>
			</div>
		</div>
	</div>
	<!--头部导航条结束-->
</template>

<!-- js -->
<script>
  export default {
  }
</script>
import Vue from 'vue'
import Router from 'vue-router'
import Guide from '../page/guide.vue'
import Home from '../page/home.vue'
import Privilege from '../page/privilege.vue'
import Member from '../page/blackCard/member.vue'
import Agent from '../page/blackCard/Agent.vue'
import Contractor from '../page/blackCard/contractor.vue'
import Join from '../page/blackCard/join.vue'
import Question from '../page/blackCard/question.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
			path: '/',
			redirect: '/guide'
		}, //重定向
		{
			path: '/guide',
			component: Guide,
			meta: {
			  title: '引导页'
			}
		}, //引导页
		{
			path: '/home',
			component: Home,
			meta: {
			  title: '首页'
			}
		}, //首页
		{
			path: '/privilege',
			component: Privilege,
			meta: {
			  title: '特权服务'
			}
		}, //特权服务
		{
			path: '/blackCard',
			redirect: '/blackCard/member',
		}, //黑卡中心
		{
			path: '/blackCard/member',
			component: Member,
			meta: {
			  title: '黑卡会员'
			}
		}, //黑卡会员
		{
			path: '/blackCard/agent',
			component: Agent,
			meta: {
			  title: '黑卡经纪人'
			}
		}, //黑卡经纪人
		{
			path: '/blackCard/contractor',
			component: Contractor,
			meta: {
			  title: '黑卡签约商户'
			}
		}, //黑卡签约商户
		{
			path: '/blackCard/join',
			component: Join,
			meta: {
			  title: '加入黑卡'
			}
		}, //加入黑卡
		{
			path: '/blackCard/question',
			component: Question,
			meta: {
			  title: '常见问题'
			}
		} //常见问题
  ]
})

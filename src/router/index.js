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
import Notice from '../page/blackCard/notice.vue'
import Notice_1 from '../page/notice/notice_1.vue'
import Notice_2 from '../page/notice/notice_2.vue'
import Company from '../page/aboutUs/company.vue'
import Platform from '../page/aboutUs/platform.vue'
import Team from '../page/aboutUs/team.vue'
import News from '../page/aboutUs/news.vue'
import Details from '../page/aboutUs/details.vue'
import Development from '../page/aboutUs/development.vue'
import Charitable from '../page/aboutUs/charitable.vue'
import Cooperative from '../page/aboutUs/cooperative.vue'

Vue.use(Router)

export default new Router({
	// mode: 'history',
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
		}, //常见问题
		{
			path: '/blackCard/notice',
			component: Notice,
			meta: {
			  title: '公告协议'
			}
		}, //公告协议
    {
      path: '/blackCard/notice/notice_1',
      component: Notice_1,
      meta: {
        title: '《轻奢点评智能合约》增设相关条款公告'
      }
    }, //公告协议1
    {
      path: '/blackCard/notice/notice_2',
      component: Notice_2,
      meta: {
        title: '轻奢点评平台精准宣传推广活动公告及规则'
      }
    }, //公告协议2
    {
      path: '/aboutUs',
      redirect: '/aboutUs/company',
    }, //关于我们
    {
      path: '/aboutUs/company',
      component: Company,
      meta: {
        title: '公司简介'
      }
    }, //公司简介
    {
      path: '/aboutUs/platform',
      component: Platform,
      meta: {
        title: '产品平台'
      }
    }, //产品平台
    {
      path: '/aboutUs/team',
      component: Team,
      meta: {
        title: '产品平台'
      }
    }, //团队成员
    {
      path: '/aboutUs/news',
      component: News,
      meta: {
        title: '新闻资讯'
      }
    }, //新闻资讯
    {
      path: '/aboutUs/news/details',
      component: Details,
      meta: {
        title: '新闻资讯'
      }
    }, //新闻详情
    {
      path: '/aboutUs/development',
      component: Development,
      meta: {
        title: '发展轨迹'
      }
    }, //发展轨迹
    {
      path: '/aboutUs/charitable',
      component: Charitable,
      meta: {
        title: '轻奢慈善'
      }
    }, //轻奢慈善
    {
      path: '/aboutUs/coperative',
      component: Cooperative,
      meta: {
        title: '合作伙伴'
      }
    }, //合作伙伴
  ]
})

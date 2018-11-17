<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.news_0">
    <img v-lazy="imgList.news_1" class="privilege_logo wow bounceInDown">
  </div>
  <!-- banner图 -->
  <!-- 资讯中心 -->
  <div class="newsList_nav">
    <div class="newsList_area">
      <h4 class="newsList_header">
        资讯中心{{all}}
      </h4>
      <ul class="newsList_ul">
        <li v-for="(item,key,index) in newsList">
          <router-link tag="a" :to="{path:'/aboutUs/news/details',query:{id:item.id}}" class="word">
            <h4 class="news_title">
              {{item.news_name}}
            </h4>
            <p class="news_source">
              <span class="time">{{item.publish_time | formatterDateTime}}</span>
              <span class="source">{{item.news_source}}</span>
            </p>
            <p class="news_content">
              {{item.news_describe}}
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="paging_navigation" v-if="all != ''">
      <paging :dataAll="all" :dataCur="cur" :datanum="num" :dataDatanum="dataNum" @change="pageChange"></paging>
    </div>

  </div>
  <!-- 加入黑卡 -->
  <JoinBlack></JoinBlack>
  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/new.css';
  .page {
    width: 100%;
    min-width: 1068px;
    height: 36px;
    margin: 40px auto;
  }
</style>

<!-- js -->
<script>
  import Header from '../../components/header';
  import JoinBlack from '../../components/joinBlack';
  import Footer from '../../components/footer';
  import Paging from '../../components/paging';
  export default {
    data () {
      return {
        imgList:{
          news_0: "../static/img/newsList_bg.png",
          news_1: "../static/img/newsList_logo.png",
        },
        all: '', //总页数
        cur: 1, //当前页码
        num: 5, //一页显示的数量 必须是奇数
        dataNum: '', //数据的数量
        newsList: '', // 新闻数量
      }
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
      'Paging': Paging, //分页模块
    },
    mounted(){
      this.getNews();
    },
    methods: {
      //子级传值到父级上来的动态拿去
      pageChange: function(page) {
        this.cur = page;
        this.getNews();
      },
      getNews: function(){ //获取新闻列表
        const that = this;
        this.$http.get('/apis/news/getNewsQsdp', {
          params: {
            currentPage: this.cur,
            recordsPerPage: 5,
          }
        })
        .then(function (response) {
          that.all = response.data.result.totalPages;
          that.dataNum = response.data.result.totalRecords;
          that.newsList = response.data.result.items;
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    filters: { //过滤器
      formatterDateTime: function(value){
        if(!value) return '';
        let date = new Date(value);
        let datetime = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
        return datetime;
      }
    }
  }
</script>

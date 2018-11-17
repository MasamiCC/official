<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <div class="BCnewsdetail">
    <div class="BCnewsdetail_con">
      <div class="BCnewsdetail_concon">
        <div class="BCnewsdetail_title">
          {{article.news_name}}
        </div>
        <div class="BCnewsdetail_small_title">
          <span class="bigtime">
            {{article.publish_time | formatterDateTime}}
          </span>
          <span class="source">
            来自{{article.news_source}}
          </span>
        </div>
        <div class="BCnewsdetail_content" v-html="articleContent">
        </div>
      </div>
      <div class="BCnewsdetail_bottom">
        <a href="javascript:history.go(-1)">
          <div class="BCnewsdetail_btn">
            返回新闻目录
          </div>
        </a>
      </div>
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
  @import '../../css/details.css'
</style>

<!-- js -->
<script>
  import Header from '../../components/header';
  import JoinBlack from '../../components/joinBlack';
  import Footer from '../../components/footer';
  export default {
    data () {
      return {
        article: '',
        articleContent: '',
      }
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
    },
    mounted(){
      const id = this.$route.query.id;
      const that = this;
      this.$http.get('http://www.592vip.top/api/news/getNewsDetail/'+ id )
      .then(function (response) {
        that.article = response.data.result;
        let articleContent = response.data.result.news_content;
        that.changeContentImg(articleContent)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    methods: {
      changeContentImg: function(data){
        let arrimg = [];
        var newData = data.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
          let imgSrc = 'https://www.592vip.com:91' + capture;
          return '<img src=' + imgSrc + '>';
        });
        this.articleContent = newData;
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

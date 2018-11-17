<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <div class="index_nav">
      <div class="qrcode_box">
          <div class="banner_qrcode">
              <p>轻奢点评APP下载</p>
              <img v-lazy="imgList.join_1" />
              <p class="banner_btn">扫一扫下载轻奢点评APP</p>
          </div>

          <div class="banner_qrcode">
              <p>轻奢点评公众号</p>
              <img v-lazy="imgList.join_2" />
              <p class="banner_btn">扫一扫关注公众号</p>
          </div>
      </div>
  </div>
  <div class="banner2">
      <img v-lazy="imgList.join_3" />
  </div>
  <!-- 加入黑卡 -->
  <JoinBlack></JoinBlack>
  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/join.css'
</style>

<!-- js -->
<script>
  import Header from '../../components/header';
  import JoinBlack from '../../components/joinBlack';
  import Footer from '../../components/footer';
  export default {
    data () {
      return {
        imgList:{
          join_1: "../static/img/join_app.png",
          join_2: "../static/img/join_06.png",
          join_3: "../static/img/join_03.png",
        }
      }
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
    },
    created () {
    },
    mounted(){
    }
  }
</script>

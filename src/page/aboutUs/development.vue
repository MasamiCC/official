<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.development_0">
  </div>
  <!-- banner图 -->
  <!-- 加入黑卡 -->
  <JoinBlack></JoinBlack>
  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/development.css'
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
          development_0: "../static/img/developmentbanner.png",
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

<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.platform_0"></div>
  <!-- banner图 -->

  <div class="box2">
      <img class="bgMinWidth" v-lazy="imgList.platform_1" alt="" />
  </div>

  <div class="box3">
      <p class="title">传媒推广</p>
      <p class="l_title">全方位、立体化的店铺推广</p>
      <div class="box3_qrcode">
          <div class="box">
              <img class="qrcode1 front" v-lazy="imgList.platform_2" alt="" />
              <img class="qrcode1 backface" v-lazy="imgList.platform_3" alt="" />
          </div>
          <div class="box">
              <img class="qrcode2 front" v-lazy="imgList.platform_4" alt="" />
              <img class="qrcode1 backface" v-lazy="imgList.platform_5" alt="" />
          </div>

          <div class="box">
              <img class="qrcode3 front" v-lazy="imgList.platform_6" alt="" />
              <img class="qrcode1 backface" v-lazy="imgList.platform_7" alt="" />
          </div>
      </div>
  </div>
  <div class="box4">
      <p class="title">分层社交</p>
      <p class="box4_l_title">线上线下共同打造用户交流分享基地</p>
      <div class=" box4_banner1" v-lazy:background-image="imgList.platform_8">
          <div class="banner_box">
              <div class="banner_title">
                  <img src="../../../static/img/platform_18.png" alt="">
                  <p>大数据抓取，精准凝聚线上社交活动，提前把握市场动态</p>
              </div>
              <div class="bnner_txt">
                  <p style="line-height: 60px">通过自主开发的分层社交系统LAZYBOOK（懒书社交软件）进行大数据抓取，精准凝聚一切对的人，一起线上交友，线下社交</p>
              </div>
          </div>
      </div>
      <div class="box4_banner2" v-lazy:background-image="imgList.platform_9">
          <div class="banner_box banner2_right">
              <div class="banner_title">
                  <p>线下真人互动，创造轻奢用户之间的朋友圈</p>
                  <img src="../../../static/img/platform_22.png" alt="">
              </div>
              <div class="bnner_txt">
                  <p>从线上走向线下，面对面更为精准的圈层社交，学习、交流、共享、私董会等，只为凝聚对的人！轻奢点评所到的每一个城市将会同步开设592VIP实体社交沙龙，供轻奢黑卡会员专享。</p>
              </div>
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
  @import '../../css/platform.css'
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
          platform_0: "../static/img/platform_01.png",
          platform_1: "../static/img/platform_04.png",
          platform_2: "../static/img/platform04.png",
          platform_3: "../static/img/platform04_hover.png",
          platform_4: "../static/img/platform05.png",
          platform_5: "../static/img/platform05_hover.png",
          platform_6: "../static/img/platform06.png",
          platform_7: "../static/img/platform06_hover.png",
          platform_8: "../static/img/platform_banner1.png",
          platform_9: "../static/img/platform_banner2.png",
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

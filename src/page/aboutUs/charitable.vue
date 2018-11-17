<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.charitable_0">
  </div>
  <!-- banner图 -->
  <div class="box_2">
      <div class="box_title">
          <img src="../../../static/img/charitable (2).png" alt="">
          <p>轻奢点评慈善基金</p>
      </div>
      <div class="box2_txt">
          <p>由轻奢点评和红十字会联合成立，专注健康扶贫，重点救助因病因灾致贫、遭遇意外等面临生存困难的特殊家庭；对入驻“轻奢点评”的达标爱心商家及其员工、轻奢点评爱心银行贡献值大的优质用户在同类情况下会优先救助。
          </p>
          <p>
              面向全国针对健康扶贫的慈善基金，基金募集打破传统方式，只要在平台消费和经营：在不额外增加任何消费或经营成本的同时，每产生一笔订单，平台将自动补贴相应善款，支持消费者进行公益慈善！当然，也接受其他渠道捐赠。
          </p>
      </div>
  </div>
  <div class="box_3">
      <div class="box_title">
          <img src="../../../static/img/charitable (3).png" alt="">
          <p>消费即赚钱 &nbsp; 生活即慈善</p>
      </div>
      <div class="box3_banner">
          <div class="box3_top">
              <img v-lazy = 'imgList.charitable_1' alt="">
              <div class="box_r">
                  <div class="r_box">
                      <p class="box_title text_right">用户如何做慈善？</p>
                      <p class="box_txt text_right">对于消费者，只是在轻奢点评消费，</p>
                      <p class="box_txt text_right">没有增加任何消费成本，就是</p>
                      <p class="box_txt text_right">在做慈善</p>
                  </div>
              </div>
          </div>
          <div class="box2_bot">
              <div class="box_l">
                  <div class="l_box">
                      <p class="box_title text_left">商家经营与慈善</p>
                      <p class="box_txt text_left">对于商户，只是在轻奢点评平台经营，</p>
                      <p class="box_txt text_left">没有增加任何额外经营成本，就是</p>
                      <p class="box_txt text_left">在做慈善</p>
                  </div>
              </div>
              <img v-lazy='imgList.charitable_2' alt="">
          </div>
      </div>
  </div>
  <div class="banner4">
      <img v-lazy='imgList.charitable_3' alt="">
  </div>
  <div class="box_5">
      <div class="box_title">
          <img src="../../../static/img/charitable (7).png" alt="">
          <p>轻奢点评慈善活动</p>
      </div>
      <div class="box5_banner">
          <div class="box5_top">
              <div class="box5_txt">
                  <p class="l_txt">轻奢点评慈善盛典</p>
                  <hr class="box_hr">
                  <p class="l_p">
                      轻奢点评慈善基金将每年举办一次“轻奢点评慈善盛典”大型公益活动，进行年度表彰爱心贡献值大的商家及用户，社会其他爱心群体及人士。
                  </p>
              </div>
              <img v-lazy='imgList.charitable_4' alt="">
          </div>
          <div class="box5_bot">
              <img v-lazy='imgList.charitable_5' alt="">
              <img v-lazy='imgList.charitable_6' alt="">
          </div>
      </div>
      <div class="box5_banner">
          <div class="box5_top">
              <div class="box5_txt">
                  <p class="l_txt">轻奢点评慈善救助</p>
                  <hr class="box_hr">
                  <p class="l_p">
                      2017年12月18日，南通市红十字会联合轻奢点评慈善基金共同启动“健康扶贫”精准救助活动
                  </p>
              </div>
              <img v-lazy='imgList.charitable_7' alt="">
          </div>
          <div class="box5_bot">
              <img v-lazy='imgList.charitable_8' alt="">
              <img v-lazy='imgList.charitable_9' alt="">
          </div>
      </div>
  </div>
  <div class="banner6">
        <img v-lazy='imgList.charitable_10' alt="">
    </div>
  <!-- 加入黑卡 -->
  <JoinBlack></JoinBlack>
  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/charitable.css'
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
          charitable_0: "../static/img/charitable (1).png",
          charitable_1: "../static/img/charitable (4).png",
          charitable_2: "../static/img/charitable (5).png",
          charitable_3: "../static/img/charitable (6).png",
          charitable_4: "../static/img/charitable (8).png",
          charitable_5: "../static/img/charitable (14).png",
          charitable_6: "../static/img/charitable (9).png",
          charitable_7: "../static/img/charitable (10).png",
          charitable_8: "../static/img/charitable (11).png",
          charitable_9: "../static/img/charitable (12).png",
          charitable_10: "../static/img/charitable (13).png",
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

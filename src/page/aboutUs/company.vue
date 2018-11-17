<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.company_0"></div>
  <!-- banner图 -->
  <!-- 创始人说 -->
  <div class="box2">
    <img src="../../../static/img/about_03.png" alt="">
    <p class="box2_title">创始人说</p>
    <div class="box2_txt">
        <p>我们富有激情</p>
        <p>我们善于创造</p>
        <p>我们勇于跨界</p>
        <p>我们敢于担当</p>
        <p>我们更有情怀</p>
        <p>我们只有一个使命</p>
        <p>专为改变2020全面小康社会后的互联网生活</p>
        <p>我们只有一个宗旨</p>
        <p>不浪费时间打劫现在 只布局和领跑未来</p>
        <p>我们只有一个愿景</p>
        <p>让未来人们生活有品 更有爱</p>
        <p>我们只有一个目标</p>
        <p>那就是</p>
        <p>消费即赚钱，生活即慈善</p>
        <p>我们</p>
        <p>为未来 而来</p>
        <p>......</p>
        <img src="../../../static/img/about_07.png" alt="">
    </div>
  </div>
  <!-- 创始人说 -->
  <!-- 介绍 -->
  <div class="banner_box3">
      <div class="box3_r">
          <p class="box3_txt">轻奢点评（股权代码：669058）是全国首个集轻奢生活、共享赚钱、零成本慈善、分层社交、精准传播、品质点评、时间成本管理为一体的区块链零投资分红轻奢级公益消费平台。其以“让互联网消费成为你共享赚钱的手段，使物质及精神品质双重提升”以及实现“全民零成本慈善，让慈善成为你的生活习惯”这一颠覆传统的发展理念为定位。旗下现拥有：轻奢点评轻奢消费平台、轻奢点评慈善基金、592VIP黑卡俱乐部实体沙龙、592VIP品牌系列产品、轻奢点评黑卡会员红利释放体系、轻奢慈善盛典自主大型活动、轻奢资讯、奢探、痴八猴脱口秀传播平台，分层社交懒书软件平台也在开发中。
          </p>
          <div class="box3_lbox">
              <img src="../../../static/img/about_11.png" alt="">
              <div>
                  <p>成立时间</p>
                  <p>2014年</p>
              </div>
          </div>
          <div class="box3_lbox">
              <img src="../../../static/img/about_13.png" alt="">
              <div>
                  <p>公司地址</p>
                  <p>中国 南通</p>
              </div>
          </div>
      </div>
      <div class="video_box">
        <embed class="play_area" src='http://dispatcher.video.qiyi.com/disp/shareplayer.swf?vid=0a8df6930133b4e0a8a8f3b8ce50c96b&tvId=23899066609&cnId=23&coop=ugc_openapi_pps_qiyi_web&cid=qc_100001_300089&bd=1&autoChainPlay=0&autoplay=0&showRecommend=0' allowFullScreen='true' quality='high' align='middle' allowScriptAccess='always' autostart=true type='application/x-shockwave-flash'></embed>
      </div>
      <div class="box"></div>
  </div>
  <!-- 介绍 -->

  <!-- 我们想干什么 -->
    <div class="box4">
        <div class="box4_l">
            <div class="box4_title">
                <img src="../../../static/img/about_18.png" alt="">
                <p>我们想干什么？</p>
            </div>
            <div class="box4_txt">
                <div class="txt_div">
                    <p>只有一个使命：</p>
                    <p>专为改变2020全面建成小康社会后的互联网生活。</p>
                </div>
                <div class="txt_div">
                    <p>只有一个宗旨:</p>
                    <p>不浪费时间打劫现在，只布局和领跑未来。</p>
                </div>
                <div class="txt_div">
                    <p>只有一个目标：</p>
                    <p>消费即赚钱，生活即慈善</p>
                </div>
            </div>
        </div>
        <!-- <div class="box4_r"> -->
        <img class="box4_rimg" v-lazy="imgList.company_1">
        <!-- </div> -->
        <div class="box"></div>

    </div>
    <!-- 我们想干什么 -->
  <!-- 加入黑卡 -->
  <JoinBlack></JoinBlack>
  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/company.css'
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
          company_0: "../static/img/about_1.png",
          company_1: "../static/img/about_06.png",
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

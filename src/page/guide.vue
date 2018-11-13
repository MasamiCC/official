<template>
<div class="container">
  <!--首页一屏主体-->
  <div class="index_nav">
    <!--内容区域-->
    <div class="index_area">
      <!--标题-->
      <div class="index_top">
        <a href="jacascript::void(0)">
          <img src="../../static/img/logo.png" class="logo"/>
        </a>
        <router-link to="/home" class="enter_official">进入官网</router-link>
      </div>
      <!--黑卡-->
      <div class="index_blackCard">
        <img src="static/img/bannerFont.png" class="wow fadeInUp" />
      </div>
    </div>
  </div>
  <!--介绍区域-->
  <div class="introduce_nav">
    <!--众多特权-->
    <div class="introduce_area introduce_1 bg_lazy" v-lazy:background-image="imgList.introduce_1">
      <!--文字介绍-->
      <div class="word_area wow fadeInRight">
        <img src="../../static/img/contentFont1.png"/>
      </div>
    </div>
    <!--区块链红利-->
    <div class="introduce_area introduce_2 bg_lazy" v-lazy:background-image="imgList.introduce_2">
      <!--文字介绍-->
      <div class="word_area wow fadeInLeft">
        <img src="../../static/img/contentFont2.png"/>
      </div>
    </div>
    <!--黑卡经纪人-->
    <div class="introduce_area introduce_3 bg_lazy" v-lazy:background-image="imgList.introduce_3">
      <!--文字介绍-->
      <div class="word_area wow fadeInRight">
        <img src="../../static/img/contentFont3.png"/>
      </div>
    </div>
    <!--想要的服务-->
    <div class="introduce_area introduce_4 bg_lazy" v-lazy:background-image="imgList.introduce_4">
      <!--文字介绍-->
      <div class="word_area wow fadeInLeft">
        <img src="../../static/img/contentFont4.png"/>
      </div>
    </div>
    <!--加入我们-->
    <div class="introduce_area introduce_5" :class="{'introduce_5_in': isOnBottom}" style="height: 900px">
      <!--背景图-->
      <div class="join_us_bg bg_lazy" v-lazy:background-image="imgList.footerImg"></div>
      <div class="join_us_area">
        <p class="join_word  wow fadeIn" data-wow-duration="2s">
          还等什么<br/>加入我们开启不一样的黑卡体验
        </p>
        <div class="join_link">
          <a href="jacascript::void(0)">
            立即加入
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../css/guide.css'
</style>

<!-- js -->
<script>
  export default {
    data () {
      return {
        imgList:{
          introduce_1: '../../static/img/contentImg1.png',
          introduce_2: '../../static/img/contentImg2.png',
          introduce_3: '../../static/img/contentImg3.png',
          introduce_4: '../../static/img/contentImg4.png',
          footerImg: '../../static/img/contentImg5.png',
        },
        isOnBottom: true,
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
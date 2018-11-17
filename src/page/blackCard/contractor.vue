<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!--首页一屏主体-->
  <div class="index_nav" v-lazy:background-image="imgList.contractor_0">
  </div>

  <!-- 签约商户介绍 -->
  <div class="contractor_intro">
    <!-- 介绍内容 -->
    <div class="contractor_intro_area">
      <div class="intro_area">
        <div class="intro">
          <img v-lazy="imgList.contractor_1">
        </div>
        <div class="intro text">
          <h4 class="title">
            签约商户的由来
          </h4>
          <p class="content">随着黑卡会员区块链分红体系的全面构成</p>
          <p class="content">需要将用户与商户都纳入到区块链体系中</p>
          <p class="content">两者相辅相成</p>
          <p class="content">黑卡签约商户应运而生</p>
        </div>
      </div>
      <div class="intro_area">
        <div class="intro text">
          <h4 class="title">
            黑卡商户需要做什么
          </h4>
          <p class="content">黑卡签约商户，经过平台培训之后，在遵守平台规则的前提下，</p>
          <p class="content">通过自己的二维码/邀请码进行轻奢点评黑卡会员的推广</p>
        </div>
        <div class="intro">
          <img v-lazy="imgList.contractor_2">
        </div>
      </div>
      <div class="intro_area">
        <div class="intro">
          <img v-lazy="imgList.contractor_3">
        </div>
        <div class="intro text">
          <h4 class="title">
            黑卡签约商户的收益
          </h4>
          <p class="content">由黑卡商家通过商铺二维码/邀请码直接邀请的黑卡会员</p>
          <p class="content">（以及该会员邀请码再次直接邀请的黑卡会员），每周</p>
          <p class="content">期阶段任务获取的分红收益额的一定比例必须在该商户</p>
          <p class="content">进行消费。商户因此获得定向的消费收益。</p>
        </div>
      </div>
    </div>
  </div>


  <!-- 准入条件 -->
  <div class="condition_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">黑卡签约商户的准入条件</h4>
    <!-- 条件区域 -->
    <div class="admittance_nav">
      <div class="admittance_area">
        <div class="admittance_img">
          <img v-lazy="imgList.contractor_5">
        </div>
        <span class="num">1</span>
        <div class="admittance_content">
          <p>拥有完整、正规的产业</p>
          <p>资格证明、营业执照、卫生许可</p>
          <p>证、文化经营许可证等</p>
        </div>
      </div>
      <div class="admittance_area">
        <div class="admittance_img">
          <img v-lazy="imgList.contractor_6">
        </div>
        <span class="num">2</span>
        <div class="admittance_content">
          <p>商户需要提供明确真实</p>
          <p>的法人身份证信息、联系方式</p>
          <p>银行账户等</p>
        </div>
      </div>
      <div class="admittance_area">
        <div class="admittance_img">
          <img v-lazy="imgList.contractor_7">
        </div>
        <span class="num">3</span>
        <div class="admittance_content">
          <p>商户提供的相关数据</p>
          <p>必须真实有效</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 如何成为黑卡会员 -->
  <div class="become_black_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">如何成为黑卡商户</h4>
    <!-- 内容区域 -->
    <div class="become_black_area">
      <div class="text">
        1、商家BOSS将自己的商户入驻并登录轻奢点评APP商户端，进入“我的”界面
      </div>
      <img v-lazy="imgList.contractor_8" class="diagonal_img">
      <div class="text">
        2、点击“我的黑卡签约店铺”，即可进入签约商铺审核界面，Boss选择需要签约的商户，可以提交审核
      </div>
      <img v-lazy="imgList.contractor_9" class="diagonal_img">
      <div class="text">
        3、平台审核通过后，商户即可成为黑卡签约商户同时会有自己专属的黑卡会员邀请码
      </div>
      <img v-lazy="imgList.contractor_8" class="diagonal_img">
      <div class="text_end">
        <img v-lazy="imgList.contractor_10" class="become_img">
        <p class="text_content">
          随着签约商户邀请的客户成为黑卡会员的数量越多，获取的定向消费红利越多，收益也会节节升高
        </p>
      </div>

      <!-- 引导手机图 -->
      <div class="guide_img guide_1"></div>
      <div class="guide_img guide_2"></div>
      <div class="guide_img guide_3"></div>
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
  @import '../../css/contractor.css'
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
          contractor_0: "../static/img/contractor_bg.png",
          contractor_1: "../static/img/contractor_intro_1.png",
          contractor_2: "../static/img/contractor_intro_2.png",
          contractor_3: "../static/img/contractor_intro_3.png",
          contractor_4: "../static/img/contractor_intro_bg.png",
          contractor_5: "../static/img/admittance_img.png",
          contractor_6: "../static/img/admittance_img_2.png",
          contractor_7: "../static/img/admittance_img_3.png",
          contractor_8: "../static/img/diagonal_left.png",
          contractor_9: "../static/img/diagonal_right.png",
          contractor_10: "../static/img/become_img.png",
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

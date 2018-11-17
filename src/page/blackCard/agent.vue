<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>

  <!--首页一屏主体-->
  <div class="index_nav bg_lazy" v-lazy:background-image="imgList.agent_0">
  </div>

  <!-- 什么是黑卡经纪人 -->
  <div class="agent_intro_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">什么是黑卡经纪人</h4>
    <div class="agent_intro_area">
      <div class="agent_intro_content left wow bounceInLeft">
        <img v-lazy="imgList.agent_1">
      </div>
      <div class="agent_intro_content right wow bounceInRight">
        是对轻奢黑卡会员体系的升级<br/>负责轻奢平台线下相关的推广维护、黑卡会员的邀请、商务合作等
      </div>
    </div>
  </div>

  <!-- 黑卡经纪人收益 -->
  <div class="agent_earnings_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">经纪人收益</h4>
    <div class="agent_earnings_area">
      <div>
        <div class="content">
          <img v-lazy="imgList.agent_2" class="agent_earnings_img">
        </div>
        <div class="content text">
          <h4 class="title">
            业务收益
          </h4>
          <p class="text_cotent">
            黑卡经纪人除享有黑卡会员权益外，还可以通过签约商户来享受对应的商户流水提成作为业务收益，业务收益以黑钻的形式发放，当达到一定额度时可以进行申请提现。
          </p>
        </div>
      </div>
      <div>
        <div class="content text">
          <h4 class="title">
            推广收益
          </h4>
          <p class="text_cotent">
            当黑卡经纪人每个月推广的黑卡会员与商铺达到指标时，会获得推广收益，收益会以现金的形式自动汇入其银行账户中。
          </p>
        </div>
        <div class="content">
          <img v-lazy="imgList.agent_3" class="agent_earnings_img">
        </div>
      </div>
    </div>
  </div>

  <!-- 准入条件 -->
  <div class="condition_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">黑卡经纪人的准入条件</h4>
    <!-- 条件区域 -->
    <div class="admittance_nav">
      <div class="admittance_area">
        <div class="admittance_img">
          <img v-lazy="imgList.agent_5">
        </div>
        <span class="num">1</span>
        <div class="admittance_content">
          <p>黑卡经纪人招募</p>
          <p>范围仅限黑卡会员</p>
        </div>
      </div>
      <div class="admittance_area">
        <div class="admittance_img">
          <img v-lazy="imgList.agent_6">
        </div>
        <span class="num">2</span>
        <div class="admittance_content">
          <p>必须进入区块链红利释放</p>
          <p>体系，并完成前3个攻略任务</p>
        </div>
      </div>
      <div class="admittance_area">
        <div class="admittance_img">
          <img v-lazy="imgList.agent_7">
        </div>
        <span class="num">3</span>
        <div class="admittance_content">
          <p>申请后，需要接受线下</p>
          <p>培训，并签署《特约经纪人商</p>
          <p>务合作协议》</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 背景 -->
  <div class="intro_bg bg_lazy" v-lazy:background-image="imgList.agent_4"></div>

  <!-- 如何成为黑卡会员 -->
  <div class="signing_steps_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">签约步骤</h4>
    <div class="signing_steps_area">
      <div class="signing_steps_content">
        <div class="text fr">
          <p>
            1、成为黑卡会员，并签订智能合约进入区块链红利释放体系，完成3个攻略任务
          </p>
          <a href="BCBlackCardMember.html" class="entry_intro">
            进入黑卡会员注册说明
          </a>
        </div>
        <p class="clearfix"></p>
        <img v-lazy="imgList.agent_8" class="diagonal_img">
        <div class="text fl">
          <p>
            2、阅读轻奢黑卡经纪人商务合作协议并点击签订合约
          </p>
        </div>
        <p class="clearfix"></p>
        <img v-lazy="imgList.agent_9" class="diagonal_img">
        <div class="text fr">
          <p>
            3、电子合约签订完成后，即可出现经纪人后台入口
          </p>
        </div>
        <p class="clearfix"></p>
        <img v-lazy="imgList.agent_8" class="diagonal_img">
        <div class="text center">
          <p>
            4、通过后台入口，即可进入业务收益界面，经纪人可通过此界面进行商户签约与查看业务收益
          </p>
        </div>
        <div class="show_img_area">
          <div class="show_img show_1 fl"></div>
          <div class="show_img show_2 fr"></div>
        </div>
      </div>
      <!-- 引导图 -->
      <div class="guide_img guide_1"></div>
      <div class="guide_img guide_2"></div>
      <div class="guide_img guide_3"></div>
    </div>
  </div>

  <!-- 特约经纪人区域 -->
  <div class="agent_intro_nav special_nav">
    <span class="block_icon"></span>
    <h4 class="block_title">轻奢点评特约经纪人</h4>
    <div class="agent_intro_area">
      <div class="agent_intro_content left wow bounceInLeft">
        <img v-lazy = "imgList.agent_10" >
      </div>
      <div class="agent_intro_content right wow bounceInRight">
        <p class="content">
          轻奢点评特约经纪人负责在授权区域协助平台进行线下签约合格商家入驻平台，
          进行在线经营和进行线下维护的工作，并同步拓展黑卡会员业务。
          其职责为：负责在签约授权城市按照协议确定的任务指标完成合格商家及黑卡会员的渠道拓展建设（包括合格商家入驻平台的洽谈、签约、协助消费引流、线下维护；黑卡会员邀请、注册、线下培训等活动的职责）
        </p>
        <p class="content">
          平台为方便特约经纪人在其所负责城市区域内进行业务管理，轻奢点评平台开放特约经纪人后台管理系统，特约经纪人可使用平台维护的专属账号进行登录，可以查看所负责区域内的相关数据。
        </p>
      </div>
    </div>
    <a class="enter_special" href="https://www.592vip.com:453"  target="_Blank">
      进入后台管理系统
    </a>
  </div>
  <!-- 加入黑卡 -->
  <JoinBlack></JoinBlack>
  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/agent.css'
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
          agent_0: "../static/img/agent_bg.png",
          agent_1: "../static/img/agent_intro.png",
          agent_2: "../static/img/agent_earnings_img_1.png",
          agent_3: "../static/img/agent_earnings_img_2.png",
          agent_4: "../static/img/contractor_intro_bg.png",
          agent_5: "../static/img/agent_admittance_img.png",
          agent_6: "../static/img/agent_admittance_img_2.png",
          agent_7: "../static/img/agent_admittance_img_3.png",
          agent_8: "../static/img/diagonal_left.png",
          agent_9: "../static/img/diagonal_right.png",
          agent_10: "../static/img/special_intro.png",
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

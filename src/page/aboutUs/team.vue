<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.team_0">
    <img v-lazy="imgList.team_1" class="privilege_logo wow rotateInDownLeft">
  </div>
  <!-- banner图 -->
  <!-- 团队风采 -->
  <div class="member_area gray_bg">
    <span class="intro_icon"> </span>
    <h4 class="title">团队风采</h4>
    <p class="content">
      我们来自五湖四海、但共同的目标孕育着同一个理想，出发点不同但目的地一样，<br/>年轻的心在这一刻相聚、团结一致、不离不弃，乘风破浪，砥砺前行。
    </p>
    <img v-lazy="imgList.team_2" class="team_img" />
    <!-- 团队介绍 -->
    <div class="team_intro"  data-wow-duration="2s">
      <div class="wow fadeInUp">
        <h4 class="title">
          研发运维部：
        </h4>
        <p class="content">
          程序猿集中营，为了“世界一流系统”拼了——私下里都是“萌妹”属性。
        </p>
      </div>
      <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
        <h4 class="title">
          产品设计部：
        </h4>
        <p class="content">
          爱生活，爱设计！我们都是“作的要死”的俊男靓女，艺术与美感的创造者。。。
        </p>
      </div>
      <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="3s">
        <h4 class="title">
          综合办公室：
        </h4>
        <p class="content">
          掌握公司的“生杀大权”！嘿嘿别怕，你开心我们陪你笑，你难过借你肩膀靠，嘘寒问暖有我们。
        </p>
      </div>
      <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="5s">
        <h4 class="title">
          市场部：
        </h4>
        <p class="content">
          业绩大牛们“星光熠熠”，他们颜值高口才好，更加惹人爱！下一个“万人迷”是你吗？！
        </p>
      </div>
      <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="7s">
        <h4 class="title">
          金融业务部：
        </h4>
        <p class="content">
          公司的“小华尔街”，谈起数字来我们绝不含糊，没点商业头脑你真搞不定！
        </p>
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
  @import '../../css/team.css'
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
          team_0: "../static/img/team_bg.png",
          team_1: "../static/img/team_logo.png",
          team_2: "../static/img/team_img.png",
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

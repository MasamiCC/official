<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>

  <!--首页一屏主体-->
  <div class="index_nav bg_lazy" v-lazy:background-image="imgList.member_1">
  </div>

  <div class="box_2">
    <div class="box2_title">
        <img src="../../../static/img/blackcard_03.png" alt="">
        <p>什么是黑卡会员</p>
    </div>
    <p>同意按照平台黑卡会员注册前置条件、注册流程等进行自愿注册的实名制注册会员，均可成为轻奢点评黑卡会员。一张实名合法身份证只能在平台注册一个会员账号，在有效服务期内具有不可篡改性。
    </p>
    <p>凡是通过邀请码在注册轻奢点评平台后并一次性在平台指定消费区域消费或购买轻奢服务或产品达到2000元人民币及以上的实名注册会员，均有资格成为该体系的黑卡会员。
    </p>
  </div>

  <div class="box_3" v-lazy:background-image="imgList.member_2">
    <div class="box3_title">
        <img v-lazy = "imgList.member_3" alt="">
        <p>轻奢点评消费区块链红利释放共享体系</p>
    </div>
    <p class="box_txt">加入轻奢黑卡体系后，即可进入轻奢点评消费区块链模式红利释放共享体系，此体系为轻奢点评进行平台精准推广及宣传而发放黑钻赠送给精准客户进行平台消费。轻奢点评黑卡会员专享该权利。本体系通过借鉴“区块链”运营模式。平台所释放的阶段性总消费利润中的大部分红利以虚拟记账凭证“黑钻”方式，分配给进入该体系的黑卡会员共享，让参与本体系的黑卡会员在零投资的情况下与平台真正实现共享赚钱及实现零成本慈善。
    </p>
    <div class="box3_banner">
        <img v-lazy = "imgList.member_4" alt="">
    </div>
  </div>

  <div class="box_4" v-lazy:background-image="imgList.member_5">
    <div class="box4_title">
        <img src="../../../static/img/blackcard_03.png" alt="">
        <p>黑卡特权服务</p>
    </div>
    <p>黑卡会员注册成功后，即可享受平台黑卡对应服务</p>
    <p>具体服务内容将会不定时进行更新与优化，旨在为会员提供</p>
    <p>更优质的特权服务，具体服务内容可参考以下规则</p>
    <a><span>全部特权</span></a>
  </div>

  <div class="box_5">
    <div class="box5_title">
        <img src="../../../static/img/blackcard_03.png" alt="">
        <p>黑卡会员有效服务周期</p>
    </div>
    <div class="box5_body">
        <p>每个获得黑卡会员资格的黑卡用户，其黑卡有效服务周期自成为黑卡会员之日开始计算，为</p>
        <div class="box5_img">
            <img v-lazy = "imgList.member_6" alt="">
            <img v-lazy = "imgList.member_7" alt="">
        </div>
        <p>
            二者只能选其一作为该黑卡会员的服务期，二者其一逾期黑卡资格将自动取消，并降为普通会员，享受普通会员的对应权益。在未被永久封号之前的所有剩余黑钻均为有效黑钻并可以等值在平台兑换任一服务或商品。丧失黑卡资格后如果再次获得黑卡资格，需重新按照本协议中注册黑卡会员前置条件规则消费后方可升级。自升级后重新计算该会员的黑卡服务周期。以此无限类推。
        </p>
    </div>
  </div>

  <div class="">
      <img class="banner" v-lazy = "imgList.member_8" alt="">
  </div>

  <div class="box_7">
      <img v-lazy = "imgList.member_9" alt="">
  </div>

  <!-- 底部 -->
  <Footer></Footer>
</div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/member.css'
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
          member_1: "../static/img/black_1.png",
          member_2: "../static/img/blackcard_02.png",
          member_3: "../static/img/blackcard_03.png",
          member_4: "../static/img/blackcard_04.png",
          member_5: "../static/img/blackcard_05.png",
          member_6: "../static/img/blackcard_06.png",
          member_7: "../static/img/blackcard_07.png",
          member_8: "../static/img/black_6.png",
          member_9: "../static/img/join_03.png",
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

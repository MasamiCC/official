<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <div class="list_box">
    <p class="title">《轻奢点评智能合约》增设相关条款公告</p>
    <p class="indent">为了规范会员行为及平台要求，现针对《轻奢点评智能合约》增加条款的说明：</p>
    <p class="strong">第一条：定义及规则中第9条休眠功能及屏蔽休眠特权资格，增加“屏蔽休眠特权资格”说明：</p>
    <p class="indent">屏蔽休眠特权资格：在系统启动休眠状态时，只有在同一个周期内当该黑卡会员邀请码衍生邀请的好友总数超过50位黑卡会员时，且该黑卡会员衍生邀请的好友总数死粉率低于10%，系统按照大盘风险，进行自动加密计算来判断是否给予该黑卡会员本人及该黑卡会员邀请码衍生邀请并活跃的所有黑卡会员屏蔽休眠特权的资格，获得该屏蔽休眠特权资格的黑卡会员，在系统进入休眠状态时，将不受系统休眠功能约束，并会优先自动正常接到任务享受相应红利释放。</p>
    <p class="strong">第二条：履约规则中第10条黑卡会员违约及扣分规则，增加第5点针对虚拟注册账号行为的说明：</p>
    <p class="indent">5)黑卡会员不得为完成任务套取平台黑钻而利用自己的邀请码，通过利用设置虚假账号的行为进行黑卡会员注册。本体系邀请注册的黑卡会员必须为真实有效并确保注册人本人能与平台产生互动行为的注册会员方认定为真实注册会员。本体系拒绝无效会员，僵尸会员，无互动行为会员进入，一旦被平台系统判断出或被平台运营人工抽查发现虚假账号注册行为，将按照违反《轻奢点评智能合约》之"签订智能合约的黑卡注册必须遵循的条件"条款进行处罚，最高可直接对注册虚假账号行为的责任邀请码账号及该虚假账号和该虚假账号邀请码所衍生邀请的所有黑卡会员帐号同时进行封号并把所获黑钻同时清零的处罚。</p>
    <p class="indent">虚假注册帐号行为认定:黑卡会员为了完成平台任务套取平台黑钻，通过自己所获得的邀请码，利用或盗用他人真实身份信息或伪(变)造他人身份信息进行注册，而被利用进行注册的他人本人并未按本系统规则参与本体系的游戏任务及平台在线消费，在线互动的行为。该行为严重违背平台发展理念及初心，在本体系中被认定为虚假注册账号的行为。</p>
    <p class="indent">根据智能合约规则，增设后的条款自公布之日起生效。若已签订智能合约的用户在本合约变更增设的条款生效后，仍继续使用本体系或平台服务的，则视为接受该等变更，若不同意的，其有权在修正公告发布24小时内平台变更前终止本合约并停止使用本体系及相关服务。</p>
  <div class="BCp_con">
    <p class="tc">
    特此公告
  </p>
  <p class="company">
    江苏轻奢点评文化科技有限公司
  </p>
  <p class="time">
    2018年9月21日
  </p>
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
.container{
  background-color: #f4f4f4;
  padding-top: 250px;
}
.title {
  text-align: center;
  margin-bottom: 70px!important;
  font-size: 28px!important;
  font-weight: 600;
}

.strong {
  font-size: 18px!important;
  font-weight: 600;
  margin: 26px 0 20px 0;
}

.list_box>p {
  margin: 20px 0;
  font-size: 17px;
  line-height: 40px;
}

.indent {
  margin: 20px 0;
  font-size: 17px;
  line-height: 40px;
}

.list_box {
  padding: 85px 220px;
  width: 1205px;
  margin: 0 auto;
  margin-bottom: 110px;
  background-color: white;
}
.tc,.time{
  margin: 0 ;
  text-align: right;
}
</style>

<!-- js -->
<script>
  import Header from '../../components/header';
  import JoinBlack from '../../components/joinBlack';
  import Footer from '../../components/footer';
  export default {
    data () {
      return {
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

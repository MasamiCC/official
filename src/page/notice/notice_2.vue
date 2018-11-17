<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <div class="all_sr list_box" style="color:#333;">
    <div class="all_sr_title">
      轻奢点评平台精准宣传推广活动公告及规则
    </div>
    <div class="content">
      <p style="text-indent: 35px;">为了快速拓展市场份额，精准锁定用户，增强客户黏性，提升平台活跃度，进一步提升轻奢点评平台的知名度、影响力。即日起面向全社会开展轻奢点评平台精准宣传推广活动。并以平台消费区块链红利释放体系通过黑卡会员完成各阶段规定任务的方式，赠送《智能合约》约定数量的虚拟记账凭证-黑钻形式进行。参加规则如下；</p>
      <p>
        1、本次活动只面向轻奢点评黑卡会员开放。
      </p>
      <p>
        2、黑卡会员获取黑钻必须通过参加区块链红利释放体系按照《智能合约》规则完成各阶段任务进行获取相应约定的黑钻数量。
      </p>
      <p>
        3、获取到的黑钻原则上可以1:1在平台内任一商家进行等值兑换消费。即：1个黑钻=1元人民币平台内消费价值。也可由黑卡会员自主与平台商家协商确定黑钻兑换价值，但必须小于等于1元人民币平台内消费价值。用户按照平台注册协议在规定的时间内没有登陆轻奢点评平台，其会员资格将被取消，同时，黑钻则会被清零。
      </p>
      <p>
        4、商家可以按照与平台签订的协议向平台申请黑钻回购，申请回购时，必须向平台提供会员真实实际消费记录清单，回购价值按照双方协议回购价值结算。
      </p>
      <p>
        5、参加活动的所有黑卡会员为自主自愿，活动过程中不得存在任何作弊行为，必须严格按照《智能合约》规则执行。
      </p>
      <p>
        6、本宣传活动自发布之日始开始执行，终止则以平台终止该活动的公告为准。
      </p>
      <p>
        7、本活动公告以轻奢点评官方平台（APP端、微信公众号、PC端）发布为准，最终解释权归江苏轻奢点评文化科技有限公司所有。
      </p>
      <p class="tc">
        特此公告
      </p>
      <p class="company">
        江苏轻奢点评文化科技有限公司
      </p>
      <p class="time">
        2018年5月10日
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
    padding-top: 250px;
    background-color: #f4f4f4;
  }
  .all_sr p {
    color: #333;
    line-height: 40px;
  }

  .all_sr {
    margin: 0 15px;
    font-size: 0.875rem;
    color: #333;
    line-height: 1.5;
  }

  .all_sr_title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 70px;
    text-align: center;
  }

  .fontweight {
    font-weight: bold;
  }

  .content {
    font-size: 17px;
  }

  .margintop10 {
    margin-top: 10px;
  }

  .textindent {
    text-indent: 35px;
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

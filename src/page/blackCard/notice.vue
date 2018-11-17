<template>
  <div class="container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 公告协议列表 -->
    <div class="list_box">
      <ul>
        <li v-for="(item,key,index) in noticeData">
          <router-link v-bind:to="'notice/notice_'+(index+1)">
            <img src="../../../static/img/list.png" alt="">
            <span class="title">{{item.title}}</span>
            <span class="BCBlackCardtime">{{item.time}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 加入黑卡 -->
    <JoinBlack></JoinBlack>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>


<!-- css -->
<style scoped>
  @import '../../css/notice.css'
</style>

<!-- js -->
<script>
  import Header from '../../components/header';
  import JoinBlack from '../../components/joinBlack';
  import Footer from '../../components/footer';
  import noticeJson from '../../../static/mock/notice.json';
  export default {
    data () {
      return {
        noticeData: noticeJson,
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

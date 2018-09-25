<template>
  <div class="container">
    <!-- 头部 -->
    <Header></Header>
    <!--首页一屏主体-->
    <div class="index_nav"> 
      <div class="logo_area">
        <img src="../../static/img/privilege_logo.png" class="privilege_logo">
      </div>
    </div>

    <!-- 黑卡特权服务 -->
    <div class="intro_area privilege_area">
      <span class="intro_icon"> </span>
      <h4 class="title">
        黑卡特权服务
      </h4>
      <p class="content mt100">
        黑卡会员注册成功后，即可享受平台黑卡对应服务<br/>具体服务内容将会不定时进行更新与优化，旨在为会员提供更优质的特权服务
      </p>
      <p class="content mt50">
        具体服务内容可参考以下规则
      </p>
      <a href="" class="join_link">
        立即加入
      </a>
    </div>

    <div class="intro_nav">
      <!-- 开始即展示的特权分类遍历 -->
      <div class="intro" v-for="(item,key,index) in privilegeData">
        <!-- 介绍图片 -->
        <div class="intro_img" v-lazy:background-image="item.introImg"></div>
        <div class="intro_area" :class="key">
          <h4 class="title">
            {{item.introTitle}}
          </h4>
          <span class="intro_icon"></span>
          <p class="intro_word">
            {{item.introWord}}
          </p>
          <span class="more_privilege" v-if="index == 3 && num == 0" v-on:click="moreClick">
            更多特权
          </span>
        </div>
      </div>

      <!-- 开始隐藏的特权分类遍历 -->
      <div class="intro_hide">
        <!-- 开始即展示的特权分类遍历 -->
        <div class="intro" v-for="(item,key,index) in privilegeHideData" v-if="index < num">
          <!-- 介绍图片 -->
          <div class="intro_img" v-lazy:background-image="item.introImg"></div>
          <div class="intro_area" :class="key">
            <h4 class="title">
              {{item.introTitle}}
            </h4>
            <span class="intro_icon"></span>
            <p class="intro_word">
              {{item.introWord}}
            </p>
            <span class="more_privilege" v-if="(index+1) % 4 == 0 && index < 12 && (index+1) == num" v-on:click="moreClick">
            更多特权
          </span>
          </div>
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
  @import '../css/privilege.css'
</style>

<!-- js -->
<script>
  import Header from '../components/header';
  import JoinBlack from '../components/joinBlack';
  import Footer from '../components/footer';
  import privilegeJson from '../../static/mock/privilege.json';
  export default {
    data(){
      return{
        privilegeData: privilegeJson.privilegeShow, //介绍展示json
        privilegeHideData: privilegeJson.privilegeHide, //介绍展示json
        num: 0, //展示的个数
      }
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
    },
    //方法
    methods:{
      //更多按钮被点击
      moreClick: function(){
        this.num = this.num + 4;
      }
    }
  }
</script>
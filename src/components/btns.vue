<template>
  <div class="bcBtns">
    <div class="bcBtns_item btniebg customer" @click="contact">
      <div class="bcBtns_item_img">
        <img src="../../static/img/kefu.png"/>
      </div>
      <div class="bcBtns_item_font">
        联系客服
      </div>
      <div class="iframe_nav" :class="showIframe ? 'show' : '' ">
        <iframe width="363" height="432" :src="iframeSrc"></iframe>
        <div class="close" @click="close" @click.stop></div>
      </div>
    </div>
    <div class="bcBtns_item btniebg">
      <router-link to="/blackCard/join" class="join_us">
        <div class="bcBtns_item_img">
          <img src="../../static/img/heika.png"/>
        </div>
        <div class="bcBtns_item_font">
          加入黑卡
        </div>
      </router-link>
    </div>
    <!--transition标签 按钮出现附带动画-->
    <transition name="el-fade-in">
      <div class="bcBtns_item btniebg" @click="backTop" v-show="backTopShow">
        <div class="bcBtns_item_img">
          <img src="../../static/img/dingbu.png"/>
        </div>
        <div class="bcBtns_item_font">
          返回顶部
        </div>
      </div>
    </transition>
  </div>
</template>

<!-- js -->
<script>
  export default {
    data(){
      return {
        backTopShow:false,
        showIframe: false,
        iframeSrc: '',
      }
    },
    methods:{
      // 计算滚动条位置
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      },
      //回到顶部
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
          }else {
            clearInterval(back)
          }
        });
      },
      //联系客服
      contact() {
        this.showIframe = !this.showIframe;
        this.iframeSrc = 'https://www.sobot.com/chat/pc/index.html?sysNum=2d82f41063a5453fa088bd67b41cef38';
      },
      //关闭弹窗
      close() {
        this.showIframe = false;
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

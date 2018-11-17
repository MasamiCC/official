<template>
<div class="container">
  <!-- 头部 -->
  <Header></Header>
  <!-- banner图 -->
  <div class="index_nav" v-lazy:background-image="imgList.cooperative_0">
  </div>
  <!-- banner图 -->
  <!--合作商家-->
  <div class="cooperate_nav">
    <span class="intro_icon"></span>
    <h4 class="title">
      合作伙伴
    </h4>
    <div class="cooperate_area">
      <ul class="cooperate_ul center" ref="cooperate_ul">
        <li v-for="(item,key,index) in cooperativeList" :style="{left: (item.left) + 'px',top: (item.top) + 'px',transform: 'rotate(' + (item.rotate) + 'deg) translateX(' + item.translateX + 'px) translateY(' + item.translateY + 'px)'}">
          <div :class = 'show' :style="{height: liHeight + 'px',width: liWidth + 'px',backgroundImage: (item.backgroundImage),backgroundPositionX:(item.backgroundPositionX) + 'px',backgroundPositionY:(item.backgroundPositionY) + 'px'}" v-on:click="creat($event)" :num="(key+1)">
          </div>
        </li>
      </ul>
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
  @import '../../css/cooperative.css'
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
          cooperative_0: "../static/img/cooperative_bg.png",
        },
        cooperativeList:[],
        liStyleList: {},
        collums: 8,
        rows: 4,
        textAlign: 'center',
        fontSize: 20,
        liWidth: 0,
        liHeight: 0,
        full: false,
        show: 'cover',
      }
    },
    computed: {
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
    },
    methods: {
      creat: function (event) { //创建整张图片
        if(this.full) { //完整
          this.creatDispersed();
          this.full = false;
        }else{ //非完整
          const num = event.currentTarget.getAttribute('num');
          let cooperativeList = this.cooperativeList;
          let bgLeft = 0;
          let bgTop = 0;
          for(let i in cooperativeList) {
            this.cooperativeList[i].rotate = 0;
            this.cooperativeList[i].translateX = 0;
            this.cooperativeList[i].translateY = 0;
            this.cooperativeList[i].backgroundImage = 'url(../static/img/cooperative_big_'+ num + '.png)';
            this.cooperativeList[i].backgroundPositionX = -bgLeft;
            this.cooperativeList[i].backgroundPositionY = -bgTop;

            bgLeft += this.liWidth;
            if (bgLeft >= 1000) {
                bgTop += this.liHeight;
                bgLeft = 0;
            }
          }
          this.cooperativeList = cooperativeList;
          this.show = 'auto';
          this.full = true;
        }
      },
      creatDispersed: function(){ //创建离散图形
        //得到需要的li宽高
        const ulWidth = parseInt(window.getComputedStyle(this.$refs.cooperate_ul).width);
        const ulHeight = parseInt(window.getComputedStyle(this.$refs.cooperate_ul).height);
        const liWidth = ulWidth/this.collums;
        const liHeight = ulHeight/this.rows;

        //设置每张图片的偏移
        let cooperativeList = []
        let num =0;
        for (var r = 0; r < this.rows; r++) {
          for (var c = 0; c < this.collums; c++) {
            cooperativeList.push({});
            cooperativeList[num].left = liWidth * c;
            cooperativeList[num].top = liHeight * r;
            cooperativeList[num].rotate = Math.random() * 40 - 20;
            cooperativeList[num].translateX = 40 * c-120;
            cooperativeList[num].translateY = 50 * r-60;
            cooperativeList[num].backgroundImage = 'url(../static/img/cooperative_'+ (num+1) + '.png)';
            num++
          }
        }
        this.liWidth = liWidth;
        this.liHeight = liHeight;
        this.cooperativeList = cooperativeList;
      }
    },
    mounted(){
      this.creatDispersed();
    }
  }
</script>

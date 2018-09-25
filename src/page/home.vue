<template>
  <div class="container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 一屏轮播 -->
    <div class="index_nav" @mouseenter="enter()" @mouseleave="leave()">
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../static/img/swiperbanner1.png"></swiper-slide>
        <swiper-slide><img src="../../static/img/swiperbanner2.png"></swiper-slide>
        <!-- 页码 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--轻奢黑卡缘起-->
    <div class="yuanQi">
      <div class="daimon_img">
        <img src="../../static/img/daimon.png"/>
      </div>
      <div class="yuanQi_ititle">
        轻奢黑卡缘起
      </div>
      <div class="yuanQi_content">
        消费者的消费，<br />
        依旧不能产生利润价值。<br />
        事实上，<br />
        现在所有的平台和商家都不会与消费者共享红利，<br />
        而轻奢点评黑卡红利释放体系，<br />
        将打破其他平台和商家，<br />
        让你在消费的同时也在投资。
      </div>
      <div class="yuanQi_shadow">
        <div class="yuanQi_shadow_item_con">
          <div class="yuanQi_shadow_item">
            <div class="yuanQi_shadow_img">
              <img src="../../static/img/dinner.png"/>
            </div>
            <div class="dinner_icon_container">
              <div class="dinner_icon_con">
                <img src="../../static/img/dinner_icon.png"/>
              </div>
              <div class="dinner_icon_font">
                美 食
              </div>  
            </div>
          </div>
        </div>
        <div class="yuanQi_shadow_item_con">
          <div class="yuanQi_shadow_item">
            <div class="yuanQi_shadow_img">
              <img src="../../static/img/adventure.png"/>
            </div>
            <div class="dinner_icon_container">
              <div class="dinner_icon_con">
                <img src="../../static/img/tourist_icon.png"/>
              </div>
              <div class="dinner_icon_font">
                旅 游
              </div>  
            </div>
          </div>
        </div>
        <div class="yuanQi_shadow_item_con">
          <div class="yuanQi_shadow_item">
            <div class="yuanQi_shadow_img">
              <img src="../../static/img/room.png"/>
            </div>
            <div class="dinner_icon_container">
              <div class="dinner_icon_con">
                <img src="../../static/img/room_icon.png"/>
              </div>
              <div class="dinner_icon_font">
                住 宿
              </div>  
            </div>
          </div>
        </div>
        <div class="yuanQi_shadow_item_con">
          <div class="yuanQi_shadow_item">
            <div class="yuanQi_shadow_img">
              <img src="../../static/img/order_shopping.png"/>
            </div>
            <div class="dinner_icon_container">
              <div class="dinner_icon_con">
                <img src="../../static/img/order_sp_icon.png"/>
              </div>
              <div class="dinner_icon_font">
                定 制
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div class="BC_joinUs">
        <a href="javascript::void(0)">
          <div class="BC_joinUs_font">
            加入我们
          </div>
        </a>
      </div>
    </div>
    <!--轻奢黑卡缘起-->
    <!--中间图-->
    <div class="bc_middle_imgcon">
      <img src="../../static/img/bc_middle.png"/>
    </div>
    <!--黑卡特权-->
    <div class="bc_rights">
      <div class="bc_rights_img">
        <img src="../../static/img/bc_right.png"/>
      </div>
      <div class="bc_rights_title">
        黑卡特权
      </div>
      <div class="bc_rights_small_title">
        加入即可享受21项黑卡特权
      </div>
      <div class="">
        <div class="bc_right_con">
          <div class="bc_right_item1">
            <div class="bc_right_item1_con">
              <img src="../../static/img/BCright1.png"/>
            </div>
          </div>
          <div class="bc_right_item2">
            <div class="bc_right_item2_con">
              <img src="../../static/img/BCright2.png"/>
            </div>
          </div>
        </div>
        <div class="bc_right_con bc_right_con2">
          <div class="bc_right_item3">
            <div class="bc_right_item3_con">
              <img src="../../static/img/BCright3.png"/>
            </div>
          </div>
          <div class="bc_right_item4">
            <div class="bc_right_item4_con">
              <img src="../../static/img/BCright4.png"/>
            </div>
          </div>
        </div>
        <div class="moreBCbrights">
          <a href="javascript::void(0)">
            <span class="moreBCbrightsbtn">更多特权</span>
          </a>
        </div>
      </div>
    </div>
    <!--黑卡特权-->
    <!--游艇-->
    <div class="bc_right_con boat">
      <div class="youting1">
        <div class="youting1_con">
          <img src="../../static/img/boat.png"/>
        </div>
      </div>
      <div class="youting2">
        <div class="youting2_con">
          <img src="../../static/img/daijia.png"/>
        </div>
        <div class="youting3_con">
          <img src="../../static/img/jiudian.png"/>
        </div>
      </div>
    </div>
    <!--游艇-->
    <!--媒体-->
    <div class="mediacon">
      <div class="mediaimg">
        <img src="../../static/img/media.png"/>
      </div>
      <div class="media_title">
        媒体报道
      </div>
      <div class="media_content">
        多家中央、地方媒体连续关注并重点报道
      </div>
      <div class="media_img_content">
        <img src="../../static/img/media_content.png"/>
      </div>
    </div>
    <!--媒体-->
    <!--招募计划-->
      <div class="bc_ZM">
        <div class="bc_ZM_img">
          <img src="../../static/img/zhaoMu.png"/>
        </div>
        <div class="bc_ZM_title">
          轻奢招募计划
        </div>
        <div class="bc_zm1 bc_zm">
          <div class="bc_zm_IMG">
            <img src="../../static/img/BcMember.png"/>
            <div class="bc_zm_btn_con">
              <a href="javascript::void(0)">
                <span class='bc_zm_btn'>MORE</span>
              </a>
            </div>
          </div>
        </div>
        <div class="bc_zm2 bc_zm">
          <div class="bc_zm_IMG">
            <img src="../../static/img/BcManager.png"/>
            <div class="bc_zm_btn_con bc_zm_btn_con2">
              <a href="javascript::void(0)">
                <span class='bc_zm_btn'>MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--招募计划-->
      <!-- 加入黑卡 -->
      <JoinBlack></JoinBlack>
      <!-- 底部 -->
      <Footer></Footer>
  </div>
</template>


<!-- css -->
<style scoped>
  @import '../css/home.css'
</style>

<!-- js -->
<script>
  import Header from '../components/header';
  import JoinBlack from '../components/joinBlack';
  import Footer from '../components/footer';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data(){
      return{
        swiperOption: { //使用swiper
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          speed: 1000,
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
      swiper,
      swiperSlide, //图片轮播组件
    },
    //方法
    methods:{
      //鼠标移入
      enter(){
      },
      //鼠标移出
      leave(){
      }
    }
  }
</script>
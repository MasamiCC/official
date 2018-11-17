<template>
  <div class="container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 一屏轮播 -->
    <div class="index_nav">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="swiper_bg" src="../../static/img/swiperbanner1.png">
          <div class="carousel_logo logo_1">
            <img src="../../static/img/carousel_logo_1.png"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="swiper_bg" src="../../static/img/swiperbanner2.png">
          <div class="carousel_logo logo_2">
            <img src="../../static/img/carousel_logo_2.png"/>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
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
            <div class="bc_right_item1 bc_right_item">
              <div class="bc_right_item1_con bc_right_item_con">
                <div class="">
                  <img src="../../static/img/BCright1.png"/>
                </div>
                <div class="bc_font">
                    <p class="bc_title">轻奢沙龙</p>
                    <p class="bc_content">
                      轻奢点评所到一个城市将会同步开设592VIP实体社交沙龙，供轻奢会员专享
                    </p>
                </div>
              </div>
            </div>
            <div class="bc_right_item2 bc_right_item">
              <div class="bc_right_item2_con bc_right_item_con">
                <div class="">
                  <img src="../../static/img/BCright2.png"/>
                </div>
                <div class="bc_font">
                  <p class="bc_title">轻奢福利</p>
                  <p class="bc_content">
                    各式美味试吃？五星级酒店试睡？特色景区试玩？首发、首映限量参加？不止是免费，快人一步，只在轻奢专享福利。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bc_right_con">
            <div class="bc_right_item3 bc_right_item">
              <div class="bc_right_item3_con bc_right_item_con">
                <div class="">
                  <img src="../../static/img/BCright3.png"/>
                </div>
                <div class="bc_font">
                    <p class="bc_title">黑卡俱乐部私董会</p>
                    <p class="bc_content">
                      从线上走向线下，面对面更为精准的圈层社交，只为凝聚对的人
                    </p>
                </div>
              </div>
            </div>
            <div class="bc_right_item4 bc_right_item">
              <div class="bc_right_item4_con bc_right_item_con">
                <div class="">
                  <img src="../../static/img/BCright4.png"/>
                </div>
                <div class="bc_font">
                  <p class="bc_title">尊贵身份</p>
                  <p class="bc_content">
                    不求闪耀全场，只让你展现真正的自己。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="moreBCbrights">
            <a>
              <div class="BC_joinUs_font">
                更多特权
              </div>
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
        swiperOption: {
          // 所有的参数同 swiper 官方 api 参数一样
          pagination: {
            el: '.swiper-pagination'
          }, //分页器
          sliderPerView: 1, //设置同时显示的数量
          autoplay: {
            delay: 2000,
            disableOnInteraction: false //操作后不停止切换
          }, //自动切换
          spaceBetween: 50, //分页按钮之间的距离
          loop: true //循环切换
        },
        imgList:{
          home_1: '../static/img/swiperbanner1.png',
          home_2: '../static/img/swiperbanner2.png'
        }
      }
    },
    //使用模块组件
    components: {
      'Header': Header, //头部模块
      'JoinBlack': JoinBlack, //加入黑卡模块
      'Footer': Footer, //底部模块
      swiper,
      swiperSlide //轮播模块
    },
    //方法
    methods:{
    }
  }
</script>

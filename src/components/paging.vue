<template>
  <!-- 分页 -->
  <ul class="paging_ul">
    <!-- <li class="first">
      <span>共{{dataNum}}条记录 第 {{cur}} / {{all}} 页</span>
    </li> -->
    <li class="previous arrow" v-on:click="pagePrev()">
    </li>
    <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}" v-on:click="btnClick(index)">
      {{ index }}
    </li>
    <li class="next arrow" v-on:click="pageNext()">
    </li>
    <!-- <li class="last_li">
      <span>共<i>{{all}}</i>页</span>
    </li> -->
  </ul>
</template>

<style type="text/css">
/*分页器*/
.paging_navigation{
  width: 1200px;
  margin: 60px auto;
}

.paging_ul{
  text-align: center;
}

.paging_ul > li{
  display: inline-block;
  width: 45px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  background-color: transparent;
  border: 1px solid #cccccc;
  vertical-align: top;
  margin: 0 10px;
  font-size: 18px;
  position: relative;
  cursor: pointer;
}

.paging_ul > li.active{
  background-color: #354a79;
  color: #ffffff;
}

.paging_ul > li:hover{
  background-color: #354a79;
  color: #ffffff;
}

/*箭头*/

.paging_ul > .arrow:after{
  position: absolute;
  top: 50%;
  display: inline-block;
  content: "";
  width: 12px;
  height: 12px;
  border-style: solid;
  border-color: #999;
  border-width: 1px 1px 0 0;
}

.paging_ul > .arrow:hover::after{
  border-color: #fff;
}

.paging_ul > .arrow.previous:after{
  right: 11px;
  -webkit-transform: translate(0,-50%) rotate(225deg);
  transform: translate(0,-50%) rotate(225deg);
}

.paging_ul > .arrow.next:after{
  right: 17px;
  -webkit-transform: translate(0,-50%) rotate(45deg);
  transform: translate(0,-50%) rotate(45deg);
}

/*禁止*/
.paging_ul > .arrow.disabled{
  cursor: not-allowed!important;
  background-color: #cccccc;
}

.paging_ul > .arrow.disabled:after{
  border-color: #ffffff;
}

.paging_ul > .arrow.disabled:hover{
  background-color: #cccccc;
}

.paging_ul > li.disabled {
  cursor: not-allowed!important;
}

.paging_ul > li.disabled:hover{
  background-color: transparent;
  color: #333333;
}
</style>

<!-- js -->
<script>
  export default {
     //显示的声明组件
     name: "paging",
     //从父级组件中传值过来的，你可以自己设置名字，但是需要跟父级传入的名字一致！
     props : ["dataAll","dataCur","datanum","dataDatanum"],
     data() {
      return {
       all: this.dataAll, //总页数
       cur: this.dataCur ,//当前页码
       num: this.datanum , //一页显示的数量 奇数
       dataNum: this.dataDatanum,//数据的数量

      }

     },
     watch: {
      cur: function(oldValue, newValue) {
        //父组件通过change方法来接受当前的页码
        this.$emit('change', oldValue)
        //这里是直接点击执行函数
      }
     },
     methods: {
      btnClick: function(data) { //页码点击事件
        if(data != this.cur) {
          this.cur = data
        }
      },
      pagePrev: function() { //上一页
        //如果是第一页返回
        if(this.cur === 1) return;
        this.cur--;
        this.$emit('change', this.cur)
      },
      pageNext: function() { //下一页
        //如果是最后一页返回
        if(this.cur === this.all) return;
        this.cur++;
        this.$emit('change', this.cur)
      },
     },
     computed: {
      indexs: function() {
        var left = 1;
        var right = this.all;
        var ar = [];
        if(this.all >= this.num ) {
          if(this.cur > 3 && this.cur < this.all - 2) {
            left = this.cur - (this.num-1)/2
            right = this.cur + (this.num-1)/2
            } else {
              if(this.cur <= 3) {
              left = 1
              right = this.num
            } else {
              right = this.all
              left = this.all - (this.num - 1);
            }
          }
        }
        while(left <= right) {
          ar.push(left)
          left++
        }
        return ar
      }

     }

    }
</script>

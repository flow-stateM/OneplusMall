<template>
  <div style="height:1rem;position:relative">
    <div @click.stop="showChange" style="height:1rem;backgroundColor:#fff;width:100%;lineHeight:1rem;fontSize:16px;textIndent:0.4rem;display:flex;alignItems:center;" ref="phoneInfo" :class="{fix:isFixVal,nofix:!isFixVal}">
      <div style="flex:3">
        <span>OnePlus5T</span>
        <i :class="{arrow:true,trans:isShow}"></i>
      </div>
      <div style="flex:2;textAlign:right;">
        <button class="buyBtn" @click.stop="buyFn">购买</button>
      </div>
      <transition name="phoneNavItem">
        <ul v-if="isShow" class="transBox">
          <li  style="width:100%;line-height: 1rem;textIndent:0.48rem;">概述</li>
          <li  style="width:100%;line-height: 1rem;textIndent:0.48rem;">参数</li>
        </ul>
      </transition>
    </div>    
  </div>
</template>

<script>
export default {
  name:'PhoneInfoNav',
  created(){
    this.scrollThrottle=this.throttle(this.isFix,50,50)
    window.addEventListener('scroll',this.scrollThrottle)
    // console.log(this.$refs)
  },
  mounted(){
    this.topnum = this.$refs.phoneInfo.getBoundingClientRect().top
  },
  data(){
    return {
      topnum:0,
      isFixVal:false,
      isShow:false
    }
  },
  computed:{
  },
  methods:{
    showChange(){
      this.isShow= !this.isShow
    },
    throttle(fn,delay,atleast){    //节流函数(闭包)
      var timer = null;
      var previous = null;
      return function (e) {
        var now = +new Date();
        if ( !previous ) previous = now;
        if ( now - previous > atleast ) {
          fn(e);
          previous = now;
        } else {
          clearTimeout(timer);
          timer = setTimeout(function() {
              fn(e);
          }, delay);
        }
      }
    },
    isFix(e){
      this.isFixVal = this.$refs.phoneInfo.getBoundingClientRect().top<=0&&document.documentElement.scrollTop>this.topnum
    },
    buyFn(){
      return 
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollThrottle)
  }
}
</script>

<style>
  .nofix{
    position:relative;
    z-index: 99;
  }
  .fix{
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .arrow{
    background-image:url('../../assets/arrow-up.png') ;
    background-size: cover;
    display: inline-block;
    width: 0.34rem;
    height:0.18rem;
    margin-left: 1.3rem;
    transition:0.4s;
    transform:rotate(180deg);
  }
  .arrow.trans{
    transform:rotate(0deg);
  }
  .transBox{
    transition: 0.4s;
    overflow: hidden;
    position:absolute;
    top:1rem;
    background-color:#fff;
    width:100%;
    padding:0.3rem 0 ;
    font-size: 16px;
    z-index: 99;
  }
  .phoneNavItem-enter,.phoneNavItem-leave-to{
    height:0;
    padding: 0;
  }
  .phoneNavItem-enter-to,.phoneNavItem-leave{
    height:2.6rem;
    padding:0.3rem 0 ;
  }
  .buyBtn{
    border: none;
    background: #eb0028;
    width: 2.58rem;
    border-radius: 5px;
    height: 0.76rem;
    line-height: 0.76rem;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
  }
</style>


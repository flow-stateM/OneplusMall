<template>
  <div style="height:1rem;">
    <ul @click="showChange" style="height:1rem;backgroundColor:#fff;width:100%;lineHeight:1rem;fontSize:16px;textIndent:0.4rem;" ref="phoneInfo" :class="{fix:isFixVal,nofix:!isFixVal}">
      <span>OnePlus5T</span><i :class="{arrow:true,trans:isShow}"></i>
      <transition name="phoneNavItem">
        <li class="active" v-if="isShow" style="position:absolute;top:1rem;lineHeight:1.18rem;backgroundColor:#ccc;width:100%">123</li>
      
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  name:'PhoneInfoNav',
  created(){
    this.scrollThrottle=this.throttle(this.isFix,100,100)
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
  }
  .fix{
    position: fixed;
    top: 0;
  }
  .arrow{
    background-image:url('../../assets/arrow-up.png') ;
    background-size: cover;
    display: inline-block;
    vertical-align: middle;
    width: 0.34rem;
    height:0.18rem;
    margin-left: 1.3rem;
    transition:0.4s;
  }
  .arrow.trans{
    transform:rotate(180deg)
  }
  .active{
    transition: 0.4s
  }
  .phoneNavItem-enter,.phoneNavItem-leave-to{
    height:0;
    line-height:0;
  }
  .phoneNavItem-enter-to,.phoneNavItem-leave{
    height:1.18rem;
    line-height:1.18rem;
  }
</style>


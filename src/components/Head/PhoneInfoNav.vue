<template>
  <div @click="con" ref="phoneInfo" :class="{fix:isFixVal}">
    123
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
      isFixVal:false
    }
  },
  computed:{
  },
  methods:{
    throttle(fn,delay,atleast){    //节流函数
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
      // console.log(this.$refs.phoneInfo.getBoundingClientRect())
      // console.log(e)
    },
    con(e){
      console.log(e)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollThrottle)
  }
}
</script>

<style>
  .fix{
    position: fixed;
    top: 0;
  }
</style>


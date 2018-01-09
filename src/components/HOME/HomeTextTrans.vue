<template>
  <div style="padding:0 20px;" :ref='name'>
    <div v-if="!isShow" style="height:400px;"></div>
    <transition-group 
    name="textGoTop"
    v-if="isShow"
    appear
    v-on:before-appear="beforeEnter"
    v-on:appear="enter"
    :duration="2000"
    tag="div"
    style="marginTop:10px;overflow:hidden">
      <p class="transtitle" :data-index="0" :key='1'>{{title}}</p>
      <p class="transbigtitle" :data-index="1" :key='2'>{{bigtitle}}</p>
      <p class="transcontent" :data-index="2" :key='3'>{{content}}</p>
    </transition-group>
    <div style="width:100%;position:relative;overflow:hidden;">
      <div :ref="name+'left'" class="left"></div>
      <slot></slot>
      <div :ref="name+'right'" class="right"></div>
    </div>
  </div>
</template>

<script>
//首页上浮文字模板组件  传入title  bigtitle content自动生成对应样式
//页面滚动时计算距离可视区域顶部距离决定是否显示
export default {
  name:'HomeTextTrans',
  data(){
    return {
      isShow:false
    }
  },
  props:[
    'name',
    'title',
    'bigtitle',
    'content'
  ],
  created(){
    this.scrollThrottle=this.throttle(this.changeShow,50,50)
    window.addEventListener('scroll',this.scrollThrottle)
    this.scrollIMGThrottle=this.throttle(this.changeWidth,50,50)
    window.addEventListener('scroll',this.scrollIMGThrottle)
  },
  methods:{
    changeShow(e){
        if(this.$refs[this.name].getBoundingClientRect().y<document.body.offsetHeight){
          this.isShow = true
          window.removeEventListener('scroll', this.scrollThrottle)
          return 
        }
    },
    changeWidth(e){
      this.$refs[this.name+'left'].style.width=(this.$refs[this.name+'left'].getBoundingClientRect().bottom-document.body.offsetHeight)/document.body.offsetHeight*40+'%';
      this.$refs[this.name+'right'].style.width=(this.$refs[this.name+'left'].getBoundingClientRect().bottom-document.body.offsetHeight)/document.body.offsetHeight*40+'%';
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(100%)';
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        el.style.opacity=1
        el.style.transform = '';
        done();
      }, delay)
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
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollThrottle)
  }
}
</script>

<style>
  .transtitle{
    font-size: 18px;
    line-height: 18px;
    margin: 5px 0;
    transition: 1s;
  }
  .transbigtitle{
    font-size: 32px;
    line-height: 44px;
    margin: 18px 0;
    transition: 1s;
  }
  .transcontent{
    font-size: 18px;
    line-height: 28px;
    transition: 1s;
    margin-bottom: 20px;
  }
  .left{
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    transition: 0.15s
  }
  .right{
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    background: #fff;
    transition: 0.15s
  }
</style>

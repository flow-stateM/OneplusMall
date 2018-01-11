<template>
  <header style="backgroundColor:#fff;width:100%;height:1.6rem;position:relative;">
    <div style="flex:1;lineHeight:1.6rem;">
      <img @click="toIndex" style="marginTop:-5px;marginLeft:0.46rem;verticalAlign:middle" src="../../assets/logo.png" alt="">
    </div>
    <div style="flex:2;lineHeight:1.6rem;textAlign:right">
      <span @click="toCart"><yd-icon class="icon" style="marginRight:5px;" name="shopcart" slot="right" color="#999999"></yd-icon></span>
      <yd-icon class="icon" style="marginRight:5px;" name="ucenter" slot="right" color="#999999"></yd-icon>
      <span @click="DownMenuShowFn" ><yd-icon class="icon" style="marginRight:5px;verticalAlign:middle" name="type" color="#999999"></yd-icon></span>
    </div>
    <transition
      name="DownMenuContent"
      v-on:after-enter="DownMenuShowDone"
      v-on:after-leave="DownMenuCloseDone"
    >
      <div class="HeadDownMenu" v-if="DownMenuShow">
        <transition-group 
          name="DownMenuItem"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
        >
          <div @click='toIndex' class="HeadDownMenuItem" :data-index="0" :key="0" v-if="DownMenuItemShow">OnePlus5T</div>
          <div @click='toMall' class="HeadDownMenuItem" :data-index="1" :key="1" v-if="DownMenuItemShow">商城</div>
          <div class="HeadDownMenuItem" :data-index="2" :key="2" v-if="DownMenuItemShow">服务</div>
          <div class="HeadDownMenuItem" :data-index="3" :key="3" v-if="DownMenuItemShow">博客</div>
          <div class="HeadDownMenuItem" :data-index="4" :key="4" v-if="DownMenuItemShow">论坛</div>
        </transition-group>
        <!-- <div v-if="DownMenuItemShow" style="backgroundColor:#fff;transition:0.5s">123</div> -->
      </div>
    </transition>
  </header>

</template>

<script>
export default {
  name:'Head',
  data(){
    return {
      DownMenuShow:false,
      DownMenuItemShow:false
    }
  },
  methods:{
    toCart(){
      this.$router.push('/cart')
    },
    toIndex(){
      this.$router.push('/')
    },
    toMall(){
      this.$router.push('/mall')
    },
    DownMenuShowFn(){
      document.documentElement.scrollTop=0;
      this.DownMenuShow = !this.DownMenuShow
    },
    DownMenuShowDone(){
      this.DownMenuItemShow=true
    },
    DownMenuCloseDone(){
      this.DownMenuItemShow=false
    },
    beforeEnter:function(el){
      el.style.transform='translateX(100%)'
    },
    enter:function(el,done){
      var delay = el.dataset.index * 50+20
      setTimeout(function(){
        el.style.transform=''
        done();
      },delay)
    }
  }
}
</script>

<style>
  header{
    background-color:#fff;
    width:100%;
    height:1.6rem;
    display: flex;
  }
  .icon{
    margin-right:5px;
    vertical-align:middle;
    padding:10px;
  }
  .HeadDownMenu{
    position: absolute;
    top: 1.6rem;
    height: 4.6rem;
    width: 100%;
    z-index: 100;
    transition:0.25s;
    overflow: hidden;
    background-color:#f3f3f3;
  }
  .HeadDownMenuItem{
    background-color:#f3f3f3;
    transition:0.5s;
    height: 0.9rem;
    line-height: 1rem;
    font-size: 0.28rem;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
  }
  .HeadDownMenuItem:last-child{
    border: none;
  }
  .DownMenuContent-enter,.DownMenuContent-leave-to{
    height:0;
  }
  .DownMenuContent-enter-to,.DownMenuContent-leave{
    height:4.6rem;
  }
</style>


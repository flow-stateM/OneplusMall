<template>
  <div style="backgroundColor:#fff;position:relative;">
    <div class="topText">
    <transition-group 
      name="textGoTop"
      appear
      v-on:before-appear="beforeEnter"
      v-on:appear="enter"
      :duration="2000"
      tag="div">
        <img :data-index="0" :key='1' style="width:4rem;transition:1s"  src="../../assets/oneplus5t.svg" alt="">
        <p :data-index="1" :key='2' style="width:4rem;lineHeight:30px;fontSize:25px;textAlign:center;boxSizing:border-box;paddingRight:0.15rem;marginTop:0.15rem;transition:1s">￥3499</p>
    </transition-group>
      </div>
    <img class="contentIMG"  src="../../assets/oneplus5t.jpg" alt="">
    <HomeTextTrans 
      v-for="(item,index) in content"
      :name='"trans"+index'
      :key='"trans"+index'
      :title='item.title' 
      :bigtitle='item.bigtitle'
      :content='item.content'
      :imgUrl='item.imgUrl'>
    </HomeTextTrans>
  </div>
</template>

<script>
import HomeTextTrans from '@/components/HOME/HomeTextTrans.vue'
import bg1 from '@/assets/bg-m1.jpg'
import bg2 from '@/assets/bg-m2.jpg'
import bg3 from '@/assets/bg-m3.jpg'
import bg4 from '@/assets/bg-m4.jpg'
import bg5 from '@/assets/bg-m5.jpg'
import bg6 from '@/assets/bg-m6.jpg'
export default {
  name:'HomeContent',
  data(){
    return {
      isShow:true,
      content:[
        {
          title:'性能 & 体验',
          bigtitle:'骁龙 835 处理器 + 8GB 大内存。',
          content:'超强超省电的处理器，超大的内存，超快的双通道闪存，超多的好用功能......拥有如此强劲的OnePlus 5T，在你手里只会凝结成一个字：爽。',
          imgUrl:bg1
        },
        {
          title:'高清双摄',
          bigtitle:'人像更漂亮，夜拍更出色。',
          content:'OnePlus 5T 的拍照更棒了，除了后置 2000 万+1600 万高清双摄，双核对焦。还有双 f/1.7 大光圈，自动 HDR 逆光拍摄，强大的专业模式。更有全新升级的人像模式 2.0 和纯净夜拍。',
          imgUrl:bg2
        },
        {
          title:'全面屏',
          bigtitle:'一用上，就会爱上。',
          content:'全面屏拥有更大的显示面积，更舒适的显示模式，更沉浸的全面屏体验。其充满未来感的显示效果，让你一旦用上它，就离不开它。',
          imgUrl:bg3
        },
        {
          title:'Dash 闪充',
          bigtitle:'边玩边闪充，好用到无可替代。',
          content:'有了 Dash 闪充，你再也不用担心续航。不管你息屏还是亮屏充电，都非常快速、安全。看片追剧，游戏开黑，精彩不断电。你用上了，就再也回不去了。',
          imgUrl:bg4
        },
        {
          title:'设计',
          bigtitle:'一上手，就爱不释手。',
          content:'全面屏的背后，依然是小巧轻薄的机身。硬朗的棱线与优雅弧度相得益彰，手感细腻舒适。现拥有深邃内敛的星辰黑、光彩夺目的熔岩红、宁静优雅的砂岩白三种配色可选。',
          imgUrl:bg5
        },
        {
          title:'网络',
          bigtitle:'更全面的信号覆盖',
          content:'多达 6 模 35 频网络制式，全球主流地区 4G + 网络，出国不用换手机。双卡双待，2 X 2 MIMO 双路 WiFi，信号覆盖更广泛，上网更快。',
          imgUrl:bg6
        }
      ]
    }
  },
  methods:{
    changeShow(){
      this.isShow = !this.isShow
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(100%)';
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 500
      setTimeout(function () {
        el.style.opacity=1
        el.style.transform = '';
        done();
      }, delay)
    }
  },
  components:{
    HomeTextTrans
  }
}
</script>
<style>
  .contentIMG{
    width: 100%;
    margin-bottom: 20px;
  }
  .topText{
    position: absolute;
    top: 0;
    height: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

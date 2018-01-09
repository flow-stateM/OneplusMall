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
      name='trans1'
      title='性能 & 体验' 
      bigtitle='骁龙 835 处理器 + 8GB 大内存。'
      content='超强超省电的处理器，超大的内存，超快的双通道闪存，超多的好用功能......拥有如此强劲的OnePlus 5T，在你手里只会凝结成一个字：爽。'>
      <img class="changeIMG" src="../../assets/bg-m.jpg" alt="">
    </HomeTextTrans>
  </div>
</template>

<script>
import HomeTextTrans from '@/components/HOME/HomeTextTrans.vue'
export default {
  name:'HomeContent',
  data(){
    return {
      isShow:true
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
  .changeIMG{
    vertical-align: top;
    width: 100%;
  }
</style>

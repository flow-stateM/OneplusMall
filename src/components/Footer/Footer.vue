<template>
  <div>
    <ul>
      <li @click="changeShow('productShow')" class="footerListTitle">
        <span>一加产品</span>
        <i :class="{arrow:true,trans:productShow}"></i>
      </li>
      <li style="overflow:hidden">
        <transition
        name="footShow"
        >
          <ul class="footListDown" v-if="productShow">
            <li class="footItem">OnePlus5T</li>
            <li class="footItem">OnePlus5</li>
            <li class="footItem">OnePlus3T</li>
          </ul>
        </transition>
      </li>
      <li @click="changeShow('aboutShow')" class="footerListTitle">
        <span>关于一加</span>
        <i :class="{arrow:true,trans:aboutShow}"></i>
      </li>
      <li style="overflow:hidden">
        <transition
        name="footShow"
        >
          <ul class="footListDown" v-if="aboutShow">
            <li class="footItem">了解一加</li>
            <li class="footItem">加入一加</li>
            <li class="footItem">H2OS</li>
          </ul>
        </transition>
      </li>
      <li @click="changeShow('supportShow')" class="footerListTitle">
        <span>服务支持</span>
        <i :class="{arrow:true,trans:supportShow}"></i>
      </li>
      <li style="overflow:hidden">
        <transition
        name="footShow"
        >
          <ul class="footListDown" v-if="supportShow">
            <li class="footItem">自助服务</li>
            <li class="footItem">技术支持</li>
            <li class="footItem">售后服务</li>
          </ul>
        </transition>
      </li>
    </ul>
    <footer class="foot">
      <div style="width:100%;textAlign:center;marginBottom:10px;">Power by:Vue2 YDUI vue-cli Vue-router Vuex</div>
      <div>Producer:flow-state Contect:13701152469</div>
    </footer>
  </div>
</template>

<script>
export default {
  name:'Footer',
  data(){
    return {
      productShow:false,
      aboutShow:false,
      supportShow:false
    }
  },
  methods:{
    changeShow(type){
      this[type]=!this[type]
    }
  }
}
</script>

<style>
  .foot{
    height: 2rem;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    font-size: 16px;
    color: #000
  }
  .footerListTitle{
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.28rem;
    line-height: 1.2rem;
    box-sizing: border-box;
    padding: 0 20px;
    color: #787878;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footListDown{
    transition:0.5s;
    padding: 10px 0 ;
  }
  .footItem{
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #787878;
    font-size: 14px;
  }
  .footShow-enter-to,.footShow-leave{
    height: 110px;
    padding: 10px 0;
  }
  .footShow-enter,.footShow-leave-to{
    height: 0;
    padding: 0;
  }
</style>

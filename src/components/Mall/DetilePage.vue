<template>
<div>
  <Head></Head>
  <img style="width:100%" :src="detile.img" alt="">
  <div class="detileContent">
    <div style="width:100%;height:1.1rem;lineHeight:1.1rem;fontSize:0.7rem;">{{detile.name}}</div>
    <div style="width:100%;height:0.6rem;lineHeight:0.6rem;fontSize:0.35rem;">{{detile.script}}</div>
    <div style="width:100%;height:0.8rem;lineHeight:0.8rem;fontSize:0.6rem;">{{detile.price}}元</div>
    <div style="width:100%;height:0.5rem;lineHeight:0.5rem;fontSize:0.35rem;">
      选择颜色：
    </div>
    <div style="position:relative;width:100%;padding:20px 5px;">
      <div @click="changeColor(item)" v-for="item in detile.color" :key="item" :class="['detileColor',{'active':isChecked(item)}]" :style="{backgroundColor:item}"></div>
    </div>
    
  </div>
  <div style="textAlign:right;backgroundColor:#fff;paddingBottom:20px;">
    <div @click="buyIt" class="detileBuy">加入购物车</div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Head from '../Head/Head.vue'
import Footer from '../Footer/Footer.vue'

export default {
  name:"DetilePage",
  data(){
    return {
      detile:{},
      chose:{
        name:'',
        color:'',
        price:'',
      }
    }
  },
  created(){
    this.detile = this.$store.state.detile.itemDetile
    this.chose.name = this.$store.state.detile.itemDetile.name
    this.chose.price = this.$store.state.detile.itemDetile.price
  },
  methods:{
    changeColor(item){
      this.chose.color = item;
    },
    isChecked(item){
      return item===this.chose.color
    },
    buyIt(){
      if(this.chose.color===''){
        this.$dialog.alert({
          mes: '请选择一个颜色'
        });
        return
      }
      this.$store.commit('buySome',this.chose)
      this.$router.push('/cart')
    }
  },
  components:{
    Head,
    Footer
  }
}
</script>

<style>
  .detileContent{
    display: flex;
    justify-content: flex-start;
    align-content: space-around;
    flex-wrap: wrap;
    padding: 20px 20px;
    background-color: #fff;
  }
  .detileColor{
    height: 0.5rem;
    width: 0.5rem;
    background: #000;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    margin-right: 10px;
  }
  .detileColor:after{
    content:'';
    display: block;
    position: absolute;
    border-radius: 50%;
    background-color:rgba(255,255,255,0.8);
    height: 0.35rem;
    width: 0.35rem;
    transition: 0.2s;
    transform: translate(-50%,-50%) scale(0);
    top: 50%;
    left: 50%;
  }
  .detileColor.active:after{
    transform:translate(-50%,-50%) scale(1)
  }
  .detileBuy{
    width: 3.5rem;
    height: 0.8rem;
    border: 1px solid #000;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.3rem;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.5);
    display: inline-block;
    margin-right: 20px;
  }
</style>

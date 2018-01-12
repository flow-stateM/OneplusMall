<template>
  <div>
    <Head></Head>
    <div>
      <div class='cartTitle'>
        我的购物车<span style="fontSize:0.3rem;color:#999999;marginLeft:5px;">全场满99免运费</span>
      </div>
      <div class="cartContent">
        <div class="nullCart" v-if="isNull">购物车空空如也~</div>
        <div style="textAlign:center" v-if="isNull"><div @click="toMall" class="nullBuy">买点东西~</div></div>
        <div v-for="(value,key) in cartNow" :key="key" class="cartItem">
          <div style="width:100%;height:0.8rem;lineHeight:0.8rem;fontSize:0.35rem;position:relative">
            <span>{{value.name}}</span>
            <span style="marginLeft: 10px;">颜色:</span>
            <span :style="{backgroundColor:value.color}" class="cartColor"></span>
            <span :data-id="key" @click="deleteFn" class="delete">X</span>
          </div>
          <div class="cartPrice" style="">￥{{value.price}}</div>
          <div style="position:relative;width:100%;height:0.7rem;lineHeight:0.7rem">
            <InputNumber @on-change="change" :max="5" :min="1" v-model="cartNow[key].count"></InputNumber>
            <span class="smallPriceAll">小计￥{{computeSmallAll(value.price,value.count)}}</span>
          </div>
        </div>
      <div class="AllCount" v-if="!isNull">总共{{count}}件商品</div>
      <div class="AllCount" v-if="!isNull">总价<span style="position:absolute;right:0;">￥{{computeAll()}}</span></div>
      <div class="BuyAll" v-if="!isNull"><span class="BuyAllBtn">结账！</span></div>
      </div>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Head from '@/components/Head/Head.vue'
import Footer from '@/components/Footer/Footer.vue'
import {InputNumber} from 'iview'

export default {
  name:'Cart',
  created(){
    this.cartNow = this.$store.state.shoppingcart.cartList;
    this.count = this.$store.state.shoppingcart.count
  },
  data(){
    return {
      cartNow:{},
      count:0
    }
  },
  computed:{
    isNull(){
      return this.$store.getters.isNull
    },
    cartList(){
      return this.$store.state.shoppingcart.cartList
    }
  },
  components:{
    Head,
    Footer,
    InputNumber
  },
  methods:{
    toMall(){
        this.$router.push('/mall')
      },
    change(num){
      let nowCount = 0;
      for(let item in this.cartNow){
        nowCount += this.cartNow[item].count
      }
      this.count = nowCount
    },
    deleteFn(e){
      this.count = this.count - this.cartNow[e.target.dataset.id].count
      delete this.cartNow[e.target.dataset.id]
      this.$store.commit('changeCart',[this.cartNow,this.count])
    },
    computeSmallAll(price,num){
      return price*num
    },
    computeAll(){
      let nowCount = 0;
      for(let item in this.cartNow){
        nowCount += this.cartNow[item].count*this.cartNow[item].price
      }
      return nowCount
    }
  },
  beforeRouteLeave(to,from,next){
      this.$store.commit('changeCart',[this.cartNow,this.count])
      next();
  },
  // watch:{
  //   cartNow(){
  //     let nowCount = 0;
  //     for(let item in this.cartNow){
  //       nowCount += this.cartNow[item].count
  //     }
  //     this.count = nowCount
  //   },
  // }
}
</script>

<style>
  .cartTitle{
    height: 1.12rem;
    line-height: 1.12rem;
    font-size: 0.4rem;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: #efefef;
  }
  .nullCart{
    height: 2.5rem;
    font-size: 0.6rem;
    text-align: center;
    line-height: 2.5rem;
  }
  .nullBuy{
    display: inline-block;
    border: 1px solid red;
    border-radius: 5px;
    width: 4rem;
    height:1rem;
    line-height: 1rem;
    color: red;
    font-size: .4rem;
    margin-bottom: 20px;
  }
  .cartContent{
    min-height: 4.95rem;
  }
  .cartItem{
    display: flex;
    justify-content: flex-start;
    align-content: center;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    flex-wrap: wrap;
  }
  .delete{
    position: absolute;
    right: 0;
    top:0;
    border: 1px solid black;
    height: 0.3rem;
    width: 0.3rem;
    line-height: 0.3rem;
    font-size: .15rem;
    text-align: center;
  }
  .cartColor{
    height: 70%;
    width:10%;
    background-color: #000;
    display: inline-block;
    vertical-align: middle;
    border-radius:25%;
  }
  .cartPrice{
    border-bottom:1px solid #ccc;
    margin-bottom: 10px;
    width:100%;
    font-size:0.32rem;
    height:0.5rem;
    line-height:0.5rem;
  }
  .smallPriceAll{
    position: absolute;
    top: 50%;
    right: 0;
    transform:translateY(-50%)
  }
  .AllCount{
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.3rem;
    box-sizing: border-box;
    margin:0 10px;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  .BuyAll{
    text-align: center;
  }
  .BuyAllBtn{
    display: inline-block;
    height: 0.9rem;
    width: 4rem;
    background-color: #eb0028;
    color: #fff;
    text-align: center;
    line-height: 0.9rem;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 16px;
  }
</style>

<template>
<div>
  <Head></Head>
  <div class="mallNav">
    <div style="width:30%;textAlign:center" @click="changeItemList('phone')">手机</div>
    <div style="width:30%;textAlign:center" @click="changeItemList('ear')">耳机</div>
  </div>
  <div class="mallContent">
    <div @click="toDetile(item)" v-for="item in itemList" :key="item.id" class="mallItem">
      <div><img style="width:2.56rem;" :src="item.img" alt=""></div>
      <div style="width:100%;textAlign:center;">{{item.name}}</div>
      <div>￥{{item.price}}</div>
      <div style="width:100%;display:flex;justifyContent:center;">
        <div v-for="color in item.color" :key="item.id+color" :style="{backgroundColor:color}" class="colorRadius"></div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Head from '@/components/Head/Head.vue'
import Footer from '@/components/Footer/Footer.vue'
import itemData from '@/assets/data.json'

export default {
  name:"Mall",
  data(){
    return {
      itemList:[]
    }
  },
  created(){
    this.itemList = itemData.phone
  },
  components:{
    Head,
    Footer
  },
  methods:{
    changeItemList(name){
      this.itemList = itemData[name]
    },
    toDetile(content){
      this.$router.push('/detile')
      this.$store.commit('commitDetile',content)
    }
  }
}
</script>

<style>
  .mallNav{
    height: .64rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  }
  .mallContent{
    display: flex;
    padding:10px 20px;
    justify-content:space-between;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
  .mallItem{
    height: 5.2rem;
    width: 3.2rem;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
  }
  .colorRadius{
    border-radius:50%;
    width:0.2rem;
    background-color:#000;
    height:0.2rem;
    margin-right: 10px;
  }
  .colorRadius:last-child{
    margin-right: 0;
  }
</style>

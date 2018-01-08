<template>
  <header style="backgroundColor:#fff;width:100%;height:1.6rem;">
    <div style="flex:1;lineHeight:1.6rem;">
      <img style="marginTop:-5px;marginLeft:0.46rem;verticalAlign:middle" src="../../assets/logo.png" alt="">
    </div>
    <div style="flex:2;lineHeight:1.6rem;textAlign:right">
      <yd-icon class="icon" style="marginRight:5px;" name="shopcart" slot="right" color="#999999"></yd-icon>
      <yd-icon class="icon" style="marginRight:5px;" name="ucenter" slot="right" color="#999999"></yd-icon>
      <yd-icon class="icon" style="marginRight:5px;verticalAlign:middle" name="type" color="#999999"></yd-icon>
    </div>
  </header>

</template>

<script>
export default {
  name:'Head'
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
</style>


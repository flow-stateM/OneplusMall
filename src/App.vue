<template>
  <div id="app">
    <div v-show="isLoad"  style="position:absolute;width:100%;height:100%;">加载中</div>
    <router-view v-show="!isLoad" />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    isLoad(){
      return this.$store.state.isLoad.isLoad
    }
  }
}
</script>

<style>
</style>

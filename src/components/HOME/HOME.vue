<template>
  <div>
    <Head></Head>
    <PhoneInfoNav></PhoneInfoNav>
    <div style="height:3000px;"></div>
  </div>
</template>
<script>
import Head from '@/components/Head/Head.vue'
import PhoneInfoNav from '@/components/Head/PhoneInfoNav.vue'

export default {
  name:"HOME",
  data(){
    return {
    }
  },
  components:{
    Head,
    PhoneInfoNav
  }
}
</script>
<style>

</style>



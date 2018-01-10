<template>
  <div>
    <Head></Head>
    <PhoneInfoNav></PhoneInfoNav>
    <HomeContent />
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head/Head.vue'
import PhoneInfoNav from '@/components/Head/PhoneInfoNav.vue'
import HomeContent from '@/components/HOME/HomeContent.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name:"HOME",
  data(){
    return {
    }
  },
  components:{
    Head,
    PhoneInfoNav,
    HomeContent,
    Footer
  }
}
</script>
<style>

</style>



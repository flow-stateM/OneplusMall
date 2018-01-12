<template>
  <div>
    <Head></Head>
    <PhoneInfoNav></PhoneInfoNav>
    <HomeContent />
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '../Head/Head.vue'
import PhoneInfoNav from '../Head/PhoneInfoNav.vue'
import HomeContent from './HomeContent.vue'
import Footer from '../Footer/Footer.vue'

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



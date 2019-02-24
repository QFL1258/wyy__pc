<template>
    <div class="app-product">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
  export default {
    components:{
      Header,Footer
    }
  }
</script>
<style>

</style>



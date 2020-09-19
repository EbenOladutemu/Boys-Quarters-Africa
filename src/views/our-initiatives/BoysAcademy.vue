<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <div class="text-center">
        <router-link slot="learn-more" class="btn btn-primary btn-xl text-uppercase js-scroll-trigger mb-4" to="who-we-are/about-us">Learn More</router-link>
      </div>
    <Creed/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Creed from '@/components/Creed.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Sidebar, Header, Creed, Footer
  },
  created() {
    document.title = 'Boys Finishing Academy | Boys Quarters Africa'
  }
}
</script>

<style>
</style>
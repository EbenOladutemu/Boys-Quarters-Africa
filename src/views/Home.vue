<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header style="margin-bottom:150px"></Header>
    <Creed/>
    <Footer></Footer>
    <div class="overlay"></div>
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
  }
}
</script>

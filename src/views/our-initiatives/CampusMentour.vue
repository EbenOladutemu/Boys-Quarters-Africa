<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <div class="container text-center pb-4">
        <img src="@/assets/img/TheExchange/Lagos/IMG_3786.jpg" class="mb-3" alt=""><br>
        <img src="@/assets/img/TheExchange/Lagos/IMG_3779.jpg" alt="">
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
    document.title = 'Campus Mentour | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ile-Ife/IMG_5288.jpg');
}
img{
  width: 100%;
  height: 70%;
}
</style>
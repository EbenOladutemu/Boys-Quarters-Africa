<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdTjg2lMM2WTTlbp9vdIl59aTB14UHD_otKlKem2rjdt7d8rg/viewform?embedded=true" style="width:100%; height:1277px; display:block; margin-top:10px" frameborder="0" marginheight="0" marginwidth="0" class="d-block d-sm-none d-none d-sm-block d-md-none form-sm mx-auto">Loading...</iframe>
    
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdTjg2lMM2WTTlbp9vdIl59aTB14UHD_otKlKem2rjdt7d8rg/viewform?embedded=true" style="width:360px; height:1277px; display:block; margin-top:10px" frameborder="0" marginheight="0" marginwidth="0" class="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block form-lg mx-auto">Loading...</iframe>
      </section>
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
    document.title = 'IBCD 2021 | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('./../../assets/img/BoysToo/Ile-Ife/IMG_5257.jpg');
}
</style>

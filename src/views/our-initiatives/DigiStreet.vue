<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">The YAHOO Project</h2><br>
          </div>
          <div class="about-style">
            <p> 
              The goal of this Project is combat the high rising trend of Internet fraud amongst
              Boys in Nigeria, through the <i><b>Boys Quarters Mobile Digital Hub</b></i>
            </p>
            <p>
              Through this Mobile Hubs, enrolled Boys are taught viable skills like Data
              Analytics, Software Engineering, Critical Thinking & Problem Solving, Project
              Management, Artificial Intelligence, BlockChain Technology etc.
            </p>
            <p>
              The goal is to take this transformation to their Door Steps. We believe through
              this, we can save a boy at a time.
            </p>
          </div>
        </div>
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
    document.title = 'Digi-Street Hub | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Akure/CRISSA/IMG_2234.jpg');
}
</style>
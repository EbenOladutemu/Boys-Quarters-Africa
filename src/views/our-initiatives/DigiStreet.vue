<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="pb-3">
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">The Digi-Street Hub</h2><br>
          </div>
          <div class="about-style">
            <p> 
              The heightening rate of Cyber Crime amongst Youth has done tremendous harm to the image and economy of the African Nations, especially nations like Nigeria.
            </p>
            <p>
              This project is a proactive measure of enrolling young boys into profitable, engaging and life-defining measures, before they enmeshed in the murky water of internet fraud. This STEM project borders on our objective to skill up 2 Million under-privilege African Boys with skills that are in tandem with their Counterparts across the world.
            </p>
            <p>
              The goal of this Project is to combat the high rising trend of Internet fraud amongst Boys in Nigeria, through the <strong>Boys Quarters Digi-Street Hub.</strong>
              Through this Mobile Hubs, enrolled Boys are taught viable skills like <strong>Data Analytics, Software Engineering, Critical Thinking, Machine Learning & Problem Solving, Project Management, Artificial Intelligence, BlockChain Technology etc.</strong>
              The goal is to take this transformation to their Door Steps. We believe through this, we can save a boy at a time.      
            </p>
            <p>This falls under the SDG Goal 4 - Quality Education & SDG Goal 9 - Industry, Innovation and Infrastructure.</p> 
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
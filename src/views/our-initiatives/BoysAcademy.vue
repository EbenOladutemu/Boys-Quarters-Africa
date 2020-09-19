<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="pb-3">
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">The Boys Finishing Academy</h2><br>
          </div>
          <div class="about-style">
            <p> 
              Boyformation Academy is the organization’s custom-curated boot camp for boys to re-educate them and help them unlearn age-long ideologies or debilitating value system.
              The academy seeks to address issues around how Boys see leadership, gender roles and their role in ensuring we arrive at the future we earnestly desire.
            </p>
            <p>
              The module of academy encompasses personal development, dressing, gender base violence, sexual abuse of Boys, relationship with girl, being domesticated, fatherhood and husband-hood, personal hygiene and other future-driven materials.
            </p>
            <p>
              A fall off of this Academy is the Men.Start.Action Project- On this Project, Boys are rallied to raise funds for the procurement of Menstrual Pads for Girls in their locality. They raise the funds and go ahead to present these pads to them on a need basis, especially for Girls in rural area. This helps the Boys see a different narrative and instill in them the discipline to protect girls and women.
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
    document.title = 'Boys Finishing Academy | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/Immersion-1.0/IMG_1756.jpeg');
}
</style>
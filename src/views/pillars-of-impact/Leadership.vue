<template>
  <div>
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">LEADERSHIP</h2><br>
          </div>
          <div class="about-style">
            <p> 
              The principal objective of this Pillar of Impact is to detox the minds of every Boy of the <i>‘Stereotyped
              Masculine Leadership’</i> and the damaging toxic masculinity that is subconsciously passed on. The sheer
              feeling that Men are made to lead and Women are made to follow birth the spiral disease called
              ‘Misogyny’ in our society.
            </p>
            <p>
              On this Pillar of impact, we engage Boys by teaching them that Leadership is Service and not about the
              Sex or Gender. Leadership isn’t synonymous to being a Boy or a Man. Leadership isn’t about the innate
              aspiration for office.
            </p>
            <p>
              At Boys Quarters, we believe if our Boys are taught right, their perception of women and familyhood
              would take a positive turn. In our bid to change the narrative around Gender Equality & Human Right,
              there’s a need to tweak the inherited understanding of what leadership means to our Boys.
            </p>
          </div>
        </div>
      </section>
    <Creed/>
    <!-- <hr class="footer-hr"> -->
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
  },
  created() {
    document.title = 'Leadership | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ibadan/IMGM2945.jpg');
}
</style>
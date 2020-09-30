<template>
  <div>
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">EDUCATION</h2><br>
          </div>
          <div class="about-style">
            <p> 
              Under the Pillar, Education, our goal is to empty the street of Africa of Young Boys who are subjected to
              several form of violence. (Domestic, Emotional and Sexual).
            </p>
            <p>We are of the resolve that Every Child must Go to school.</p>
            <p>
              Boys aren’t Men yet. Hence, they shouldn’t be subjected to debasing realities that rid them off their Self
              Esteem and desired future. However, our definition of Education here isn’t ABC or 123 only. It’s Music,
              Drawing, Fashion, Dancing, etc. This is basically about transforming their Gifts to Skills and garnish it up
              with Values.
            </p>
            <p>Through this pillar, we intend to reach out to disabled Boys- especially in the North.</p>
            <h3>Flagship Projects</h3>
            <p>
              <strong>The Digi-Street Hub</strong>: This core objective of this project is combat the spike in internet fraud activities
              amongst Boys and skill them up with the Skill of the Future.
            </p>
            <p>
              This STEM project borders on our objective to skill up 2 Million under-privilege African Boys with skills
              that are in tandem with their Counterparts across the world.
            </p>
            <p>
              We’d be running Mobile Digital Hubs, where we’d take trainings on Artificial Intelligence, Data Science,
              BlockChain Technology, Solutions Development, etc to their areas.
            </p>
            <p>
              On this <strong>Digi-Street Hub Project</strong>, we’d train Boys who are from below-humble backgrounds and skill them up to
              put our names on Global Lips. This Project would see us take Mobile Yahoo Hub to different suburb
              areas across Africa and they are also taught Critical Thinking & Problem Solving. Creativity &
              Innovation.
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
    document.title = 'Education | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Akure/CRISSA/IMG_2145.jpg');
}
</style>
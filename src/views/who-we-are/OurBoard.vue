<template>
  <div>
    <Sidebar></Sidebar>
    <Header style="margin-BOTtom:150px"></Header>
    <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Board of Trustees</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Solomon O. Ayodele.jpg" alt="Solomon Ayodele">
            <h4>Solomon Oluwatobi Ayodele</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Ruby Onwudiwe.jpg" alt="Ruby Onwudiwe">
            <h4>Ruby Onwudiwe</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Segun Alade.jpg" alt="Segun Alade">
            <h4>Segun Alade</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Ayodele Kenneth.jpg" alt="Ayodele Kenneth">
            <h4>Ayodele Kenneth</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Oyindamola Ohwesi.jpg" alt="Oyindamola Ohwesi">
            <h4>Oyindamola Ohwesi</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Victor Adewusi.jpg" alt="Victor Adewusi">
            <h4>Victor Adewusi</h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
        <div class="col-sm-12">
          <div class="team-member">
            <img class="mx-auto" :style="imgBorder" src="@/assets/img/BOT/Busayo Morakinyo.jpg" alt="Busayo Morakinyo">
            <h4>Busayo Morakinyo </h4>
            <!-- <p class="text-muted">Lead Execution Officer</p>  -->
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </section>
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
  },
  data(){
    return{
      imgBorder:{
        border: '7px solid #e6e6e6'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url("../../assets/img/BoysToo/Ile-Ife/IMG_5167.jpg");
}
</style>
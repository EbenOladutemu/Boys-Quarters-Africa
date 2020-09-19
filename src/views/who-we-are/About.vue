<template>
  <div>
    <Sidebar></Sidebar>
    <Header style="margin-bottom:150px"></Header>
    <section>
    <div class="container">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">About Us</h2><br>
        <h3 class="section-subheading text-muted" :style="aboutStyle">
          <i>‘It is believed that if a Boy is neglected or fed a diet of hate and violence it is obvious he will develop into
            a teenage who is misguided and confused. And the next crucial transition into manhood will be even
            more difficult.’
          </i>
        </h3>
      </div>
      <div class="about-style">
        <p> 
          Boys Quarters Africa (Registered as Boy-Child Reformation Initiative CAC/IT/NO134867) is a volunteer driven Boy-child transformation movement, missioned with the core objective of Educating, Empowering and Advocating for the Boychild. 
        </p>
        <p>
          Our vision is to be an inspiring bridge of transition for every African Boy Child, by redefining masculinity through Empowering and Educating Projects. This vision transcends mere social enterprise but a movement to raise a new tribe of Boys who will rise to the demands of life and masculinity in general. All our projects are delivered on a structured level of impact, as we operate within our 4 Strategic pillars of Impact, <b>L.E.A.D</b> which are; 
        </p><br>
        <div class="row">
          <div class="col-lg-3 mx-auto text-center">
            <router-link to="#" class="poi-color">
              <i class="fas fa-user-tie fa-4x"></i>
              <h3>Leadership</h3>
            </router-link>   
          </div>
          <div class="col-lg-3 mx-auto text-center">
            <router-link to="#" class="poi-color">
              <i class="fas fa-user-graduate fa-4x"></i>
              <h3>Education</h3>
            </router-link>
          </div>
          <div class="col-lg-3 mx-auto text-center">
            <router-link to="#" class="poi-color">
              <i class="fas fa-hand-rock fa-4x"></i>
              <h3>Empowerment</h3>
            </router-link> <!-- ./../pillars-of-impact/leadership -->
          </div>
          <div class="col-lg-3 mx-auto text-center">
            <router-link to="#" class="poi-color">
              <i class="fas fa-balance-scale fa-4x"></i>
              <h3>Advocacy</h3>
            </router-link>
          </div>
        </div><br>
        <p>
          We are an operational NGO, meaning, we plan and carry out boots-on-the-ground projects to accomplish our objectives around our pillars of impact. This requires a great deal of careful planning, communication, volunteer’s mobilization, community engagement and many more. Our goal as an organization is to accomplish amongst many, following;
        </p>
        <ul>
          <li>To detox the minds of every boy child that have been immense in the worrisome idea of stereotypical masculine leadership. i.e. a sense that Leadership is Sex & Gender.
          <li>To advocate for every African Boy-Child who has been subjected to several forms of violence. (Domestic, Emotional and Sexual). </li>
          <li>To Empower Boys behind bars and those who already lose hope in themselves and their future. By inspiring them to Exchange their Pains for Purpose, guilt for greatness etc. </li>
          <li>To mobilize Young Men who will contribute toward ending the years of countless biases against Girls and Women.</li>
          <li>To raise an awareness on the silent but cancerous menace of sexual abuse of the Boy Child. 
          </li>
        </ul>
        <p>
          Through our Leadership pillar, we intend to detox the minds of every Boy of the ‘Stereotyped Masculine Leadership’ and the damaging toxic masculinity that is subconsciously passed on from generation to generation. Our flagship project on Sexual Abuse of the Boy Child, offers up the opportunity to bring to fore the damaging reality of how much Boys are left behind in the conversation.
        </p>
        <p>
          Our activities range from providing information on Sexual Education and Sexual Abuse to the Boy-Child, provide psychosocial & legal support for abused boys, create platforms for learning the Skills of the future for disadvantages boys, reach out to the unreached boys in juvenile homes & special correctional centres, advocate for the Boy-Child on varying grounds, host boot-camps and programmes that reorient their minds off the inherited stance of toxic masculinity and teach on the unsaid truth around Leadership.
        </p>
        <p>
          With a growing number of over 100 Volunteers across the 6 Geo-Political Zones in Nigeria and 5 other Africa Countries, we’ve engaged 4,517 Boys, specifically through our Flagship Project called Boys Too (Bringing to fore the menace of Sexual Abuse of the Boy Child).  
        </p>
      </div>
      <div class="text-center" :style="aboutStyle">
        <h2 class="intro-heading text-uppercase">BECOME A VOLUdNTEER</h2>
        <h5>The Transformation Begins With You</h5>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger mt-3" href="./../volunteer">Volunteer NOW!</a>
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
  data(){
    return{
      aboutStyle:{
        marginBottom: '25px'
      }
    }
  },
  created() {
    document.title = 'About Us | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Akure/CRISSA/IMG_2215.jpg');
}
</style>
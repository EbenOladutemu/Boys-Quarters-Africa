<template>
  <div>
    <Sidebar></Sidebar>
    <Header></Header>
      <section class="mb-5">
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">ADVOCACY</h2><br>
          </div>
          <div class="about-style">
            <p> 
              The BoysToo Campaign is one of our Flagship Project and this falls under the pillar of ‘Advocacy’. We
              intend to bring to fore the menace of Sexual Abuse of the Boy Child.
            </p>
            <p>
              Our intent is to take Sexual Education to the Boys, sensitize them on the Menace Of Sexual Abuse on
              their Minds and Reiterate the Power Of SPEAKING UP.
            </p>
            <p>We are working with Psychologists, Counselors and Psycho-Therapists on this cause.</p>
            <p>We aren’t just talking to them. We are also working to help some of them find healing and closure.</p>
            <p>
              Apart from our engagement with the Boys, we also GATHER DATA. We’ve met with over 1,000 Boys
              since we kicked off the Project and we’ve been able to get reasonable value from the information
              gathered from those Boys.
            </p>
            <p>
              Apart from the Information and Psychological support, we also work on giving LEGAL aid to families
              who intend to take any abuse related issue.
            </p>
            <p>
              As part of Advocacy, we discovered that Rape is an offence, recognised by our laws but so emotionally
              segregated to favour the feminine gender.<br>
              Right now, the criminal code and penal code defined Rape is against female
            </p>
            <p>
              Only a single law which is violent against persons Act define rape to be either against male or
              female.That's the contradiction in our jurisprudence.
            </p>
            <p>We are looking forward to an ideal state where wrong will be wrong irrespective of who did it.</p>
            <p>Where Rape will be Rape, irrespective of the Gender</p>
            <!-- <h3>Projects</h3> -->
            <ul>
              <li>
                Create a channel for pyscho-socio support. Engagement and connection with Psychologists,
                Psychotherapists & Counsellors. A pool of first responders.
              </li>
              <li>
                The focus is healing for the abused – Closure and Healing.
              </li>
              <li>
                Legal Advocacy for abuse against the Male Rape gender.
              </li>
              <li>Toll free number</li>
            </ul>
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
    document.title = 'Advocacy | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ile-Ife/IMG_5343.jpg');
}
</style>
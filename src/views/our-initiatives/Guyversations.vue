<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <section>
        <div class="container">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Guyversations</h2><br>
          </div>
          <div class="about-style">
            <p>
              There are basically three elements to these men-themed conversations; Uninhibited Openness, Beautiful Vulnerabilities and of course, garnering a digital safe space for young men. Since the maiden edition on the 12th of April, 2020, we’ve had about 15 Guests, across different walks of life, discussing issues that relate to GUYS! The cumulative digital footprint is about 2,500 audience and traction gained shows the quantum of impact on the minds of young men.
            </p>
            <p>
              <strong>Guests and Topics are highlighted below:</strong><br>
            </p>
            <ul>
              <li>UNDERSTANDING THE UNTOLD STRUGGLES OF SEXUALITY by Bisi Alimi</li>

              <li>I WAN BLOW; UNDERSTANDING THE ESSENCE OF FAME & IMPACT by Dr. Wilson Joel</li>

              <li>I WAN BLOW II; UNDERSTANDING THE ESSENCE OF FAME & IMPACT by Gaise Baba</li>

              <li>BOYS WILL BE BOYS; TRACING THE ROOT OF POWER & TOXIC MASCULINITY by Solomon Buchi</li>

              <li>FACING AFRICA’S GOLIATH; YOUR DESIGNATION ON THE BATTLE FIELD by Kayode Adeniji</li>

              <li>NECESSARY REBELLION; MASTERING THE ART OF DEFYING THE NORM by Jimi Odukoya</li>

              <li>W.W.W. (WETIN WOMEN WANT SEF?) by Toju Dami-Oluwatoyinbo</li>

              <li>W.W.W. II (WETIN WOMEN WANT SEF?) by Tolulope ‘Solutions’ Adejumo</li>

              <li>FUTUR	NOLOGY; PLUGGING INTO THE FUTURE WE ARE ALREADY LATE FOR by Kitan David.</li>
              
              <li>POP CULTURE & THE REDEFINITION OF THE 21ST CENTURY MAN by Olumide Oworu, Gaffy & PartyJollof.</li>
            </ul>
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
    document.title = 'Guyversations | Boys Quarters Africa'
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  background-image: url('../../assets/img/BoysToo/Ikare/Image 2020-02-11-8.jpeg');
}
li{
  margin-top: 1rem;
}
</style>
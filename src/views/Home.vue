<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Header></Header>
      <div class="text-center">
        <router-link slot="learn-more" class="btn btn-primary btn-xl text-uppercase js-scroll-trigger mb-4" to="who-we-are/about-us">Learn More</router-link>
        <p>Boys Engaged</p>
        <h1 style="font-size: 70px">
          <ICountUp
            :delay="delay"
            :endVal="endVal"
            :options="options"
            @ready="boysEngaged"
          />
        </h1>
      </div>
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
import ICountUp from 'vue-countup-v2';

export default {
  components: {
    Sidebar, Header, Creed, Footer, ICountUp
  },
  data(){
    return{
      delay: 1000,
      endVal: 5850,
      options: {
        duration: 6,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  created() {
    document.title = 'Home | Boys Quarters Africa'
  },
  methods: {
    boysEngaged(instance) {
      const that = this;
      instance.update(that.endVal);
    }
  }
}
</script>

<style>
</style>
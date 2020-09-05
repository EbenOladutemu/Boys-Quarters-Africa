<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav';

export default {
  components:{
    Nav
  },
  data(){
    return{
      siteUrl: 'https://boysqafrica.com',
      siteImage: 'https://boysqafrica.com/logo.png',
      siteName: 'Boys Quarters Africa',
      siteTitle: '',
      siteDescription: 'We are solely missioned to facilitate a smooth transition from Boyhood to Manhood! Raising boys to become responsible fathers, reliable husbands and accountable citizens of the society. For the boy who will rise to the challenge of manhood. His Struggles & Strength are valid.',
      siteKeywords: 'Boys Quarters Africa, Boys, Quarters, Africa, Nigeria, boy, young men, sexual abuse, manhood, masculinity, tansition, boyhood, guyversations, Solomon Ayodele, Oyindamola Ejiro, Louis Okoh, Oladutemu Ebenezer, Glory Odikagbue, Kolade Emmanuel, Busayo Fache, Ama Akiri, Ruby Onwudiwe, Busayo Morakinyo, Tomi Fowe, saving the boys, boys need attention'
    }
  },
  metaInfo(){
    return{
      meta: [
        { name: 'description', content: this.siteDescription },
        { name: 'author', content: 'Eben Web Krafts' },
        { name: 'keywords', content: this.siteKeywords },
        { name: 'website', content: this.siteName },
        { name: 'image', content: this.siteImage },
        // Schema.org for Google
        { itemprop: 'name', content: this.siteName },
        { itemprop: 'title', content: this.siteName },
        { itemprop: 'description', content: this.siteDescription },
        { itemprop: 'image', content: this.siteImage },
        // Twitter - Product (e-commerce)
        // Open Graph general (Facebook, Pinterest & Google+)
        { property: 'og:title', content: this.siteName },
        { property: 'og:description', content: this.siteDescription },
        { property: 'og:url', content: this.siteName },
        { property: 'og:image', content: this.siteImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_NG' },
        { property: 'og:site_name', content: this.siteName },
        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: this.siteUrl },
        { name: 'twitter:title', content: this.siteName },
        { name: 'twitter:description', content: this.siteDescription },
        { name: 'twitter:image', content: this.siteImage },
        { name: 'twitter:site', content:  '@boysqafrica' },
        { name: 'twitter:creator', content: '@EbenOladutemu' }
      ]
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 18px;
}

html{
  scroll-behavior: smooth;
}
</style>

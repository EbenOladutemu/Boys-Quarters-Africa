import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/css/agency.min.css'
import './assets/css/bqstyles.css'
import './assets/vendor/sidebar/sidebar.css'
import './assets/vendor/sidebar/scrollbar.css'
import './assets/css/lightbox.css'
import './assets/css/imagehover.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

<script>
import { RouterLink, RouterView } from 'vue-router'

//importing bootstrap 5 Modules
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
import Home from './views/Home.vue'

export default {

  components: {
    Header,
    Footer,
    Home
  }
}
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
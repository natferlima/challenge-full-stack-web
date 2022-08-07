<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src: "./img/1grupoa.png",
        app_name: "Grupo A"
      }
    }
  }
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-container {
    padding: 50px;
    min-height: 500px;
    background-color:  #f0f0f0;
  }
</style>

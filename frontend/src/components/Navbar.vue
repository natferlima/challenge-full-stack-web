<template>
  <nav id="nav">
    <router-link to="/home">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    props: ["logo", "alt", "route"],
  }
</script>
<style scoped>
  #nav {
    background-color:  #e4e9ed;
    border-bottom: 4px solid #e4e4e4;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logo {
    height: 50px;
  }
</style>

<template>
  <div class="main-container">
    <div id="title-home">
      <h1>Consulta de Aluno(a)</h1>
    </div>
    <div id="div-btn-register-student-home">
      <router-link to="/register-student">
        <button type="button" id="btn-register-student-home">Cadastrar Aluno(a)</button>
      </router-link>
    </div>
    <Dashboard />
  </div>
</template>

<script>
  import Dashboard from '../components/Dashboard.vue';

  export default {
    name: "Home",
    components: {
      Dashboard
    },
    methods: {
      async clear() {
        const idStudent = JSON.parse(localStorage.getItem('edit'));
        if (idStudent !== null && idStudent !== "") {
          localStorage.removeItem('edit');
        }
      }
    },
    mounted() {
      this.clear();
    }
  }
</script>

<style scoped>
  #title-home {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  #div-btn-register-student-home {
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
  }
  #btn-register-student-home {
    padding: 14px;
    font-size: 17px;
    font-weight: bold;
    background-color: #ff203b;
    color: #fff;
    border-radius: 15px;
    border: 1px solid #bb243e;
    cursor: pointer;
    transition: .5s;
  }
  #btn-register-student-home:hover {
    background-color: #f82b4d;
  }
</style>

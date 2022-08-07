<template>
  <div class="main-container">
    <h1>Consulta de Aluno(a)</h1>
    <div>
      <router-link to="/register-student">
        <button type="button">Cadastrar Aluno(a)</button>
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
    }
  }
</script>

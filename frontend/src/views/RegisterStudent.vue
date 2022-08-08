<template>
  <div class="main-container">
    <div id="div-btn-logout">
      <button type="button" id="btn-logout" @click="logout">SAIR</button>
    </div>
    <div class="title-register-student">
      <h1>Cadastro de Aluno(a)</h1>
    </div>
    <StudentForm />
  </div>
</template>

<script>
  import router from '../router';
  import StudentForm from "../components/StudentForm.vue"

  export default {
    name: "RegisterStudent",
    components: {
      StudentForm
    },
    methods: {
      async logout() {
        localStorage.clear();
        router.push({ path: '/' });
      }
    },
  }
</script>

<style>
  .title-register-student {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
</style>


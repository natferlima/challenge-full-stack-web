<template>
  <div class="main-container">
    <div class="title-register-student">
      <h1>Cadastro de Aluno</h1>
    </div>
    <StudentForm />
  </div>
</template>

<script>
  import StudentForm from "../components/StudentForm.vue"
  export default {
    name: "RegisterStudent",
    components: {
      StudentForm
    }
  }
</script>

<style>
  .title-register-student {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
</style>


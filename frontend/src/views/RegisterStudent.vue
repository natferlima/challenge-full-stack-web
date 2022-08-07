<template>
  <div class="main-container">
    <h1>Cadastro de Aluno</h1>
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


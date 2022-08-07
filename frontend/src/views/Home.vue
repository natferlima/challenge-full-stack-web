<template>
  <div class="main-container">
    <router-link to="/register-student">
      <button type="button">Cadastrar Aluno</button>
    </router-link>
    <h1>Home</h1>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Home",
    data() {
      return {
        students: null
      }
    },
    methods: {
      async getStudents() {
        const { data } = await axios("http://localhost:3001/student");
        this.students = data;
        console.log(data);
      }
    },
    mounted() {
      this.getStudents();
    }
  }
</script>

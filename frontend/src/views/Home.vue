<template>
  <div class="main-container">
    <h1>Home</h1>
    <div>
      <router-link to="/register-student">
        <button type="button">Cadastrar Aluno</button>
      </router-link>
    </div>
    <Dashboard />
  </div>
</template>

<script>
  import axios from 'axios';
  import Dashboard from '../components/Dashboard.vue';

  export default {
    name: "Home",
    components: {
      Dashboard
    },
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

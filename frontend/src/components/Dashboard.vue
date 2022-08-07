<template>
  <div id="student-table">
    <div>
      <div id="student-table-heading">
        <div class="order-RA">Registro Acadêmico</div>
        <div>Nome</div>
        <div>CPF</div>
        <div>Ações</div>
      </div>
    </div>
    <div id="student-table-rows">
      <div class="student-table-row" v-for=" student in students" :key="student.id">
        <div class="order-number">{{ student.RA }}</div>
        <div>{{ student.name }}</div>
        <div>{{ student.CPF }}</div>
        <div>
          <button type="button" class="btn-edit">Editar</button>
          <button type="button" class="btn-remove">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Dashboard",
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
  
<style scoped>
  #student-table {
    max-width: 1200px;
    margin: 0 auto;
  }
  #student-table-heading,
  #student-table-rows,
  .student-table-row {
    display: flex;
    flex-wrap: wrap;
  }
  #student-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #1b2731;
  }
  #student-table-heading div,
  .student-table-row div {
    width: 25%;
  }
  .student-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }
  /* #student-table-heading .order-RA,
  .student-table-row .order-number {
    width: 15%;
  } */
  .btn-edit {
    margin: 5px;
    padding: 5px;
    background-color: #07a0a8;
    color: #fff;
    font-weight: bold;
    border: 2px solid #01a9af;
    /* font-size: 16px; */
    cursor: pointer;
    transition: .5s;
    border-radius: 6px;
  }
  .btn-edit:hover {
    background-color: #00b5bc;
  }
  .btn-remove {
    margin: 5px;
    padding: 5px;
    background-color:  #d01c37;
    color: #fff;
    font-weight: bold;
    border: 2px solid #bb243e;
    /* font-size: 16px; */
    cursor: pointer;
    transition: .5s;
    border-radius: 6px;
  }
  .btn-remove:hover {
    background-color: #ff203b;
  }
</style>
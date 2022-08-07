<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="student-form" @submit="createStudent">
        <div class="input-container">
          <label for="name">Nome</label>
          <input type="text" id="name" name="name" v-model="name" placeholder="Informe o nome completo">
        </div>
        <div class="input-container">
          <label for="email">E-mail</label>
          <input type="text" id="email" name="email" v-model="email" placeholder="Informe apenas um e-mail">
        </div>
        <div class="input-container">
          <label for="RA">RA</label>
          <input type="text" id="RA" name="RA" v-model="RA" placeholder="Informe o registro acadêmico">
        </div>
        <div class="input-container">
          <label for="CPF">CPF</label>
          <input type="text" id="CPF" name="CPF" v-model="CPF" placeholder="Informe o número do documento">
        </div>
        <div class="button-container">
          <router-link to="/">
            <button type="button" id="btn-cancel">Cancelar</button>
          </router-link>
          <button type="submit" id="btn-save">Salvar</button>
        </div>
      </form>
    </div>
  </div>  
</template>

<script>
  import axios from 'axios';
  import Message from './Message.vue';

  export default {
    name: "StudentForm",
    data() {
      return {
        name: null,
        email: null,
        RA: null,
        CPF: null,
        msg: null,
      }
    },
    methods: {
      async createStudent(e) {
        e.preventDefault();
        const { data } = await axios({
          method: "post",
          url: "http://localhost:3001/student",
          data: {
            name: this.name,
            email: this.email,
            RA: this.RA,
            CPF: this.CPF,
          },
        });
        this.name = "";
        this.email = "";
        this.RA = "";
        this.CPF = "";
        this.msg = data.message;
        setTimeout(() => this.msg = "", 3000);
        console.log(data);
      }
    },
    components: {
      Message
    }
  }
</script>

<style scoped>
  #student-form {
    max-width: 400px;
    margin: 0 auto;
  }
  #btn-cancel {
    margin: 10px;
    padding: 12px;
    background-color:  #d01c37;
    color: #fff;
    font-weight: bold;
    border: 2px solid #bb243e;
    font-size: 16px;
    cursor: pointer;
    transition: .5s;
    border-radius: 6px;
  }
  #btn-save {
    margin: 10px;
    padding: 12px;
    background-color: #07a0a8;
    color: #fff;
    font-weight: bold;
    border: 2px solid #01a9af;
    font-size: 16px;
    cursor: pointer;
    transition: .5s;
    border-radius: 6px;
  }
  #btn-cancel:hover {
    background-color: #ff203b;
  }
  #btn-save:hover {
    background-color: #00b5bc;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    padding: 5px 10px;
    border-left: 4px solid #1b2731;
  }
  input {
    padding: 5px 10px;
    width: 380px;
    border-radius: 4px;
    border: 1px solid #2c3b48;
  }
</style>
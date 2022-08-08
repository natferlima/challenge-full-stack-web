<template>
  <div class="main-container">
    <div class="title-container">
      <h1>Login</h1>
    </div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="login-form" @submit="login">
        <div class="input-container">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" v-model="email">
        </div>
        <div class="input-container">
          <label for="password">Senha</label>
          <input type="password" id="password" name="password" v-model="password">
        </div>
        <div class="btn-container">
            <button type="submit" id="btn-login">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router';
  import Message from '../components/Message.vue';

  export default {
    name: "Login",
    data() {
      return {
        email: null,
        password: null,
        msg: null,
      }
    },
    components: {
      Message
    },
    methods: {
      async login(e) {
        try {
          e.preventDefault();
          const { data } = await axios({
            method: "post",
            url: "http://localhost:3001/login",
            data: {
              email: this.email,
              password: this.password,
            },
          });
          localStorage.setItem('token', JSON.stringify(data.token));
          router.push({ path: '/home' });
        } catch(error) {
          this.msg = error.response.data.message;
        }
      }
    },
  }
</script>

<style scoped>
  #login-form {
    max-width: 400px;
    margin: 0 auto;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    padding: 5px 10px;
    border-left: 4px solid #01a9af;
  }
  input {
    padding: 5px 10px;
    width: 380px;
    border-radius: 4px;
    border: 1px solid #2c3b48;
  }
  #btn-login {
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
  #btn-login:hover {
    background-color: #00b5bc;
  }
  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
</style>
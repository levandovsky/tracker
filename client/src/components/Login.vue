<template>
    <div class="container">
    <h1 class="title">Login</h1>
    <div class="field">
      <div class="control">
        <input class="input has-margin-bottom-2" type="email" name="email" v-model="email">
        <input class="input" type="password" name="password" v-model="password">
      </div>
    </div>
    <br>
    <div class="error" v-html="error"></div>
    <button class="button is-primary is-large" @click="login">Login</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const res = await AuthService.login({
        email: this.email,
        password: this.password
      });
      console.log(res.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    width: 50%;
  }
  .error {
    color: red;
  }
  input {
    margin-bottom: 10px;
  }
</style>

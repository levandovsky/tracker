<template>
  <panel title="Login">
    <div class="field">
      <form class="control">
        <input class="input" type="email" name="email" v-model="email">
        <input class="input" type="password" name="password" v-model="password">
      </form>
      <br>
      <div class="error" v-html="error"></div>
      <button class="button is-primary is-large" @click="login">Login</button>
    </div>
  </panel>
</template>

<script>
import AuthService from '@/services/AuthService';
import Panel from '@/components/Panel';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  components: {
    Panel,
  },
  methods: {
    async login() {
      try {
        const res = await AuthService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch('setToken', res.data.token);
        this.$store.dispatch('setUser', res.data.user);

        console.log(res.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

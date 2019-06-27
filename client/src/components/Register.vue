<template>
  <panel title="Register">
    <div class="field">
      <form class="control" autocomplete="off">
        <input class="input has-margin-bottom-2" type="email" name="email" v-model="email">
        <input class="input" type="password" name="password" v-model="password">
      </form>
      <br>
      <div class="error" v-html="error"></div>
      <button class="button is-primary is-large" @click="register">Register</button>
    </div>
  </panel>
</template>

<script>
import AuthService from '@/services/AuthService';
import Panel from '@/components/Panel';

export default {
  name: 'register',
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
    async register() {
      try {
        const res = await AuthService.register({
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

<style scoped>
</style>

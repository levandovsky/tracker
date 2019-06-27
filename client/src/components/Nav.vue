<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" @click="navigateTo({name: 'HelloWorld'})">Tracker</a>

      <a
        role="button"
        class="navbar-burger burger"
        id="burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="menuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="navigateTo({name: 'recipes'})">Browse</a>
      </div>

      <div class="navbar-end">
        <a
          class="navbar-item has-text-primary"
          @click="navigateTo({name: 'register'})"
          v-if="!$store.state.isLoggedIn"
        >
          <strong>Sign up</strong>
        </a>
        <a
          class="navbar-item"
          @click="navigateTo({name: 'login'})"
          v-if="!$store.state.isLoggedIn"
        >Log in</a>
        <a class="navbar-item" @click="logout" v-if="$store.state.isLoggedIn">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);

      this.$router.push({
        name: 'HelloWorld',
      });
    },
    menuActive() {
      const menu = document.getElementById('navbarMenu');
      const burger = document.getElementById('burger');

      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    },
  },
};
</script>

<style lang="scss" scoped>
  nav {
    margin-bottom: 20px;
  }
</style>

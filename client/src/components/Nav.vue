<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" @click="navigateTo({name: 'HelloWorld'})">
      Tracker
    </a>

    <a role="button" class="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" @click="navigateTo({name: 'register'})">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="navigateTo({name: 'login'})">
            Log in
          </a>
        </div>
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
  },
};
</script>

<style lang="scss" scoped>
</style>

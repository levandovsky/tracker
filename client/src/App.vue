<template>
  <div id="app" class="container">
    <PageNav />
    <router-view/>
  </div>
</template>

<script>
import PageNav from '@/components/Nav';

export default {
  name: 'App',
  components: {
    PageNav,
  },
};
</script>

<style>
@import 'style/mystyle.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.error {
  color: red;
}

input {
  margin-bottom: 10px;
}

.field {
  width: 100%;
}
</style>

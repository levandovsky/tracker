<template>
  <div class="panel">
    <div class="panel-heading">
      <h1>{{ title }}</h1>
    </div>
      <slot>No slot content defined.</slot>
  </div>
</template>

<script>
export default {
  props: [
    'title',
  ],
};
</script>

<style lang="scss" scoped>

</style>

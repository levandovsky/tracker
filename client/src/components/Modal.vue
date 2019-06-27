<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <slot>No content defined.</slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wasAdded: null,
    };
  },
  methods: {
    closeModal() {
      const modal = document.getElementById('modalElement');
      modal.classList.remove('is-active');
    }
  },
  props: ['title',],
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="container">
    <panel title="Recipes">
      <div class="panel-block" v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</div>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth" @click="showModal()">Add a recipe</button>
      </div>
    </panel>
    <modal id="modalElement" title="Add a recipe">
      <create-recipe v-on:addedRecipe="getRecipes"></create-recipe>
    </modal>
  </div>
</template>

<script>
import RecipesService from '@/services/RecipesService';
import Panel from '@/components/Panel';
import CreateRecipe from '@/components/CreateRecipe';
import Modal from '@/components/Modal';

export default {
  data() {
    return {
      recipes: null,
    };
  },
  components: {
    Panel,
    CreateRecipe,
    Modal,
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    showModal() {
      const modal = document.getElementById('modalElement');
      modal.classList.add('is-active');
    },
    async getRecipes() {
      const recipesRequest = await RecipesService.getAll();
      this.recipes = recipesRequest.data;
    },
  },
  async mounted() {
    this.getRecipes();
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="field">
    <div class="control">
      <input type="text" class="input" placeholder="Title" v-model="recipe.title">
      <input type="text" class="input" placeholder="Description" v-model="recipe.description">
      <input type="text" class="input" placeholder="Author" v-model="recipe.author">
      <input type="text" class="input" placeholder="Youtube link" v-model="recipe.youtube">
      <input type="text" class="input" placeholder="Image url" v-model="recipe.img">
      <textarea
        name="ingredients"
        id="ingredients"
        class="textarea"
        placeholder="Ingredients"
        cols="30"
        rows="10"
        v-model="recipe.ingredients"
      ></textarea>
      <textarea
        name="preparation"
        id="preparation"
        class="textarea"
        placeholder="Preparation"
        cols="30"
        rows="10"
        v-model="recipe.howto"
      ></textarea>
    </div>
    <button class="button is-success is-fullwidth" @click="addRecipe">Save changes</button>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import RecipesServive from '@/services/RecipesService';

export default {
  data() {
    return {
      recipe: {
        title: null,
        description: null,
        author: null,
        ingredients: null,
        howto: null,
        youtube: null,
        img: null,
      },
    };
  },
  components: {
    Panel,
  },
  methods: {
    async addRecipe() {
      try {
        await RecipesServive.post(this.recipe);
        this.$emit('addedRecipe');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  height: 200px;
  resize: none;
  margin-bottom: 10px;
}
</style>

const { Recipe } = require('../models');
const Pagination = require('../config/pagination');

module.exports = {
  async getAll(req, res) {
    try {
      const recipes = await Recipe.findAll({
        limit: Pagination.recipesPerPage,
      });
      const recipesArray = res.send(recipes);
      return recipesArray;
    } catch (err) {
      return res.status(404).send({
        error: 'Something went wrong 404',
      });
    }
  },
  async create(req, res) {
    try {
      const recipe = await Recipe.create(req.body);
      const createdRecipe = res.send(recipe);
      return createdRecipe;
    } catch (err) {
      return res.status(404).send({
        error: 'Something went wrong 404',
      });
    }
  },
};

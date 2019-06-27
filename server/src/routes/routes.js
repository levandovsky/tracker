const AuthController = require('../controllers/AuthController');
const AuthControllerPolicy = require('../policies/AuthControllerPolicy');
const RecipesController = require('../controllers/RecipesController');

module.exports = (app) => {
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register);
  app.post('/login',
    AuthController.login);
  app.get('/recipes',
    RecipesController.getAll);
  app.post('/recipes',
    RecipesController.create);
};

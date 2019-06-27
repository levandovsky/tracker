import Api from '@/services/Api';

export default {
  getAll() {
    return Api().get('recipes');
  },
  post(recipe) {
    return Api().post('recipes', recipe);
  },
};
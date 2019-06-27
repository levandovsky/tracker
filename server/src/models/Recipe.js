module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      author: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      howto: DataTypes.TEXT,
      youtube: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
  );

  return Recipe;
};

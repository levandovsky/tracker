module.exports = (sequelize, dataTypes) => sequelize.define('User',
  {
    email: {
      type: dataTypes.STRING,
      unique: true,
    },
    password: dataTypes.STRING,
  });

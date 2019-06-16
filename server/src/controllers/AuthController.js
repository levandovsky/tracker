const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/config');

function jwtSignIn(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.auth.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      // throw if user already exists
      res.status(400).send({
        error: 'This email is already in use!',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'Invalid login data!',
        });
      }
      const userIsValid = password === user.password;
      if (!userIsValid) {
        return res.status(403).send({
          error: 'Invalid login data!',
        });
      }
      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignIn(userJSON),
      });
    } catch (err) {
      return res.status(404).send({
        error: 'Something went wrong 404',
      });
    }
    return 'error';
  },
};

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tracker',
    user: process.env.DB_USER || 'tracker',
    password: process.env.DB_PASS || 'tracker',
    options: {
      host: process.env.HOST || 'localhost',
      dialect: process.env.DIALECT || 'sqlite',
      storage: './tracker.squlite',
    },
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};

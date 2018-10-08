module.exports = {
  DB_HOST: process.env.HOST || 'localhost',
  USER: process.env.DB_USER || 'chris',
  PASSWORD: process.env.DB_PW || 'password',
  PORT: process.env.PORT || 3002,
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  NEW_RELIC_KEY: process.env.NEW_RELIC_KEY || 'placeholder',
};
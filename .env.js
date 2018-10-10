module.exports = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'chris',
  DB_PW: process.env.DB_PW || 'password',
  PORT: process.env.PORT || 3002,
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
};

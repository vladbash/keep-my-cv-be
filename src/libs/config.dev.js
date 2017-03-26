module.exports = {
  database: 'kmcv',
  username: 'root',
  password: 'root',
  params: {
    dialect: 'mysql',
    logging: (sql) => {
      console.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'Nta$K-AP1',
  jwtSession: { session: false },
};
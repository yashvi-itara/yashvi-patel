module.exports = {
  HOST: "yashvi-db.czg680ocgnzy.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "admin123",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

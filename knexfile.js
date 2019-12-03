module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "guns",
      user: "postgres",
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

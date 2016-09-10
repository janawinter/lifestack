// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'lifestack',
      user:     'eda',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-184-73-202-229.compute-1.amazonaws.com',
      port: '5432',
      database: 'dat16vcqpa25mp',
      user:     'eugprbskmqtovo',
      password: process.env.DBPWD
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

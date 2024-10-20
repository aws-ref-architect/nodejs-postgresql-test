// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
      client: 'pg',
      connection: {
        host : '127.0.0.1',
        user : '[db_username]',
        password : '[db_password]',
        database : '[db_name]',
        charset: 'utf8'
      },
      migrations: {
        directory: __dirname + '/database/migrations',
      },
      seeds: {
        directory: __dirname + '/database/seeds'
      },
      tests: {
        directory: __dirname + "/database/test"
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
      database: 'my_db',
      user:     'username',
      password: 'password'
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

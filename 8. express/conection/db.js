const Knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'snlogger',
    database : 'lab'
  }
});

module.exports = Knex
const environment = 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  matchUsers: function(username, password) {
    return db('users').select().where('username', username).where('password', password)
  }
}

const connection = require('./connection')

// function  (db = connection) {
//   return db().select()
// }

function getUsers (db = connection) {
  return db('users').select()
}

module.exports = {
  getUsers
}

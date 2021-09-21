const connection = require('./connection')

function  (db = connection) {
  return db().select()
}

module.exports = {
}

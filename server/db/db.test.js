const environment = process.env.NODE_ENV || 'test'
const config = require('./knexfile')[environment]
const testDb = require('knex')(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getAllUsers returns all users', () => {
  return db.getAllUsers(testDb)
    .then(users => {
      expect(users).toHaveLength(5)
    })
})

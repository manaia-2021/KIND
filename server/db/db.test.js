/* eslint-disable promise/always-return */
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

test('addNewUser adds a new user', () => {
  const user = { name: 'bob', user_name: 'kindBob' }
  return db.addNewUser(user, testDb)
    .then(() => {
      return db.getAllUsers(testDb)
    })
    .then(users => {
      expect(users).toHaveLength(6)
    })
})

test('deleteUser deletes a user', () => {
  return db.deleteUser(1, testDb)
    .then(() => {
      return db.getAllUsers(testDb)
    })
    .then(users => {
      expect(users).toHaveLength(4)
    })
})

test('getUser returns the right user', () => {
  return db.getUser(1, testDb)
    .then(user => {
      expect(user.id).toBe(1)
    })
})

test('getUserByEmail returns the right user', () => {
  return db.getUserByEmail('email@address.com', testDb)
    .then(user => {
      expect(user.email_address).toBe('email@address.com')
    })
})

test('getAllCategories returns all categories', () => {
  return db.getAllCategories(testDb)
    .then(categories => {
      expect(categories).toHaveLength(5)
    })
})

test('getAllActions returns all actions', () => {
  return db.getAllActions(testDb)
    .then(actions => {
      expect(actions).toHaveLength(36)
    })
})

test('getUserActionByUser returns the correct number of actions', () => {
  return db.getUserActionByUser(1, testDb)
    .then(actions => {
      expect(actions).toHaveLength(1)
    })
})

test('getActionsByCategory returns the correct number of actions', () => {
  return db.getActionsByCategory(101, testDb)
    // eslint-disable-next-line promise/always-return
    .then(actions => {
      expect(actions).toHaveLength(8)
    })
})

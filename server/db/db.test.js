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
      expect(actions).toHaveLength(4)
    })
})

test('getActionsByCategory returns the correct number of actions', () => {
  return db.getActionsByCategory(101, testDb)
    // eslint-disable-next-line promise/always-return
    .then(actions => {
      expect(actions).toHaveLength(8)
    })
})

test('addNewUserActions updates actions of a given user and returns id of last updated row', () => {
  return db.addNewUserActions(1, [1, 2], testDb)
    .then(updatedRows => {
      expect(updatedRows[0]).not.toBeNull()
    })
})

describe('updateUserAction', () => {
  test('updateUserAction updates status of action successfully for found user returning 1', () => {
    return db.updateUserAction(1, true, testDb)
      .then(updatedRows => {
        expect(updatedRows).toBe(1)
      })
  })

  test('updateUserAction returns 0 if user not found', () => {
    return db.updateUserAction(999, true, testDb)
      .then(updatedRows => {
        expect(updatedRows).toBe(0)
      })
  })
})

describe('updateUserPoints', () => {
  test('updateUserPoints updates users points for user found returning 1', () => {
    return db.updateUserPoints(1, 100, testDb)
      .then((res) => {
        expect(res).toBe(1)
      })
  })

  test('updateUserPoints for user not found returns 0 to indicate 0 rows updated', () => {
    return db.updateUserPoints(999, 100, testDb)
      .then((res) => {
        expect(res).toBe(0)
      })
  })
})

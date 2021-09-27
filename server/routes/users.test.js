const request = require('supertest')
const server = require('../server')
const { getAllUsers, getUser, addNewUser, deleteUser, getUserActionByUser, addNewUserActions, updateUserAction } = require('../db/db')

jest.mock('../db/db')

// when mocking functions always have the following to ensure your mocks are clean at the start of each test
// beforeEach(() => jest.clearAllMocks())

describe('GET /api/v1/users', () => {
  test('returns status code of 200 and list of all users in the database', () => {
    getAllUsers.mockImplementation(() =>
      Promise.resolve([
        { id: 1, name: 'user 1' },
        { id: 2, name: 'user 2' }
      ])
    )

    expect.assertions(4)
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.status).toBe('success')
        expect(res.body.data.users).toHaveLength(2)
        expect(res.body.data).toEqual({ users: [{ id: 1, name: 'user 1' }, { id: 2, name: 'user 2' }] })
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getAllUsers.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('GET /api/v1/user/1', () => {
  test('returns status code of 200 and the found user object', () => {
    getUser.mockImplementation(() =>
      Promise.resolve(
        { id: 1, name: 'user 1' }
      )
    )

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.status).toBe('success')
        expect(res.body.data).toEqual({ user: { id: 1, name: 'user 1' } })
        return null
      })
  })

  test('returns a status code of 404 and appropriate error message if user not found', () => {
    getUser.mockImplementation(() => Promise.resolve())

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/999')
      .then((res) => {
        expect(res.status).toBe(404)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('No user with that corresponding ID was found')
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUser.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/1')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('POST /api/v1/users', () => {
  test('returns status code of 201 and id of newly created user', () => {
    addNewUser.mockImplementation(() => Promise.resolve([1]))

    expect.assertions(4)
    return request(server)
      .post('/api/v1/users')
      .send({ name: 'john doe', username: 'johndoe' })
      .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.status).toBe('success')
        expect(res.body.data).toEqual({ id: 1 })
        expect(addNewUser).toHaveBeenCalledWith({ name: 'john doe', username: 'johndoe' })
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    addNewUser.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .post('/api/v1/users')
      .send({ name: 'john doe', username: 'johndoe' })
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('DELETE /api/v1/users/1', () => {
  test('returns status code of 204 for successful deletion', () => {
    deleteUser.mockImplementation(() => Promise.resolve())

    expect.assertions(2)
    return request(server)
      .delete('/api/v1/users/1')
      .then((res) => {
        expect(res.status).toBe(204)
        expect(deleteUser).toHaveBeenCalledWith(1)
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    deleteUser.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .delete('/api/v1/users/1')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('GET /api/v1/users/1/actions', () => {
  test('returns status code of 200 and list of user actions', () => {
    getUser.mockImplementation(() => Promise.resolve(true))
    getUserActionByUser.mockImplementation(() => Promise.resolve([{ user_id: 1, action_id: 1, completed: true, counter: 5 }, { user_id: 1, action_id: 2, completed: false, counter: 0 }]))

    expect.assertions(4)
    return request(server)
      .get('/api/v1/users/1/actions')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getUserActionByUser).toHaveBeenCalledWith(1)
        expect(res.body.status).toBe('success')
        expect(res.body.data).toEqual({ userActions: [{ user_id: 1, action_id: 1, completed: true, counter: 5 }, { user_id: 1, action_id: 2, completed: false, counter: 0 }] })
        return null
      })
  })

  test('returns a status code of 404 and appropriate error message if resource not found', () => {
    getUser.mockImplementation(() => Promise.resolve())
    getUserActionByUser.mockImplementation(() => Promise.resolve([]))

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/999/actions')
      .then(res => {
        expect(res.status).toBe(404)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('No user of that ID exists')
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUser.mockImplementation(() => Promise.resolve(true))
    getUserActionByUser.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/1/actions')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('POST /api/v1/users/1/actions', () => {
  test('returns status code of 201', () => {
    addNewUserActions.mockImplementation(() => Promise.resolve())

    expect.assertions(3)
    return request(server)
      .post('/api/v1/users/1/actions')
      .send({ actionIds: [5, 4, 3, 12, 13] })
      .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.status).toBe('success')
        expect(addNewUserActions).toHaveBeenCalledWith(1, [5, 4, 3, 12, 13])
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    addNewUserActions.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .post('/api/v1/users/1/actions')
      .send([5, 4, 3, 12, 13])
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('PATCH /api/v1/users/1/actions', () => {
  test('returns status code of 200', () => {
    updateUserAction.mockImplementation(() => Promise.resolve())

    expect.assertions(3)
    return request(server)
      .patch('/api/v1/users/1/actions')
      .send({ userActionId: 1, status: true })
      .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.status).toBe('success')
        expect(updateUserAction).toHaveBeenCalledWith(1, true)
        return null
      })
  })

  test('returns a status code of 404 and appropriate error message if user not found', () => {
    getUser.mockImplementation(() => Promise.resolve())
    updateUserAction.mockImplementation(() => Promise.resolve(0))

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/999')
      .then((res) => {
        expect(res.status).toBe(404)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('No user with that corresponding ID was found')
        // I would also have the following to ensure that the update function was never called. Note you will need the beforeEach mentioned above for this to work properly
        //  expect(updateUserAction).not.toHaveBeenCalled()
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUser.mockImplementation(() => Promise.resolve(true))
    updateUserAction.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .patch('/api/v1/users/1/actions')
      .send({ userActionId: 1, status: true })
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

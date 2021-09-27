const request = require('supertest')
const server = require('../server')
const { getAllUsers, getUser, addNewUser, deleteUser, getUserActionByUser, addNewUserActions, updateUserAction } = require('../db/db')

jest.mock('../db/db')

beforeEach(() => jest.clearAllMocks())

describe('GET /api/v1/users', () => {
  test('returns status code of 200 and list of all users in the database', () => {
    const users = [
      { id: 1, name: 'user 1' },
      { id: 2, name: 'user 2' }
    ]

    getAllUsers.mockResolvedValue(users)

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.users).toHaveLength(2)
        expect(res.body.data).toEqual({ users })
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getAllUsers.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .get('/api/v1/users')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('GET /api/v1/user/1', () => {
  test('returns status code of 200 and the found user object', () => {
    getUser.mockResolvedValue({ id: 1, name: 'user 1' })

    expect.assertions(2)
    return request(server)
      .get('/api/v1/users/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data).toEqual({ user: { id: 1, name: 'user 1' } })
        return null
      })
  })

  test('returns a status code of 404 and appropriate error message if user not found', () => {
    getUser.mockResolvedValue()

    expect.assertions(2)
    return request(server)
      .get('/api/v1/users/999')
      .then((res) => {
        expect(res.status).toBe(404)
        expect(res.body.message).toBe('No user with that corresponding ID was found')
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUser.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .get('/api/v1/users/1')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('POST /api/v1/users', () => {
  test('returns status code of 201 and id of newly created user', () => {
    addNewUser.mockResolvedValue([1])

    expect.assertions(3)
    return request(server)
      .post('/api/v1/users')
      .send({ name: 'john doe', username: 'johndoe' })
      .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.data).toEqual({ id: 1 })
        expect(addNewUser).toHaveBeenCalledWith({ name: 'john doe', username: 'johndoe' })
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    addNewUser.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .post('/api/v1/users')
      .send({ name: 'john doe', username: 'johndoe' })
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('DELETE /api/v1/users/1', () => {
  test('returns status code of 204 for successful deletion', () => {
    deleteUser.mockResolvedValue()

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
    deleteUser.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .delete('/api/v1/users/1')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('GET /api/v1/users/1/actions', () => {
  const userActions = [{ user_id: 1, action_id: 1, completed: true, counter: 5 }, { user_id: 1, action_id: 2, completed: false, counter: 0 }]

  test('returns status code of 200 and list of user actions', () => {
    getUser.mockImplementation(() => Promise.resolve(true))
    getUserActionByUser.mockResolvedValue(userActions)

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/1/actions')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getUserActionByUser).toHaveBeenCalledWith(1)
        expect(res.body.data).toEqual({ userActions })
        return null
      })
  })

  test('returns a status code of 404 and appropriate error message if resource not found', () => {
    getUser.mockResolvedValue()
    getUserActionByUser.mockResolvedValue([])

    expect.assertions(2)
    return request(server)
      .get('/api/v1/users/999/actions')
      .then(res => {
        expect(res.status).toBe(404)
        expect(res.body.message).toBe('No user of that ID exists')
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUser.mockResolvedValue(true)
    getUserActionByUser.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .get('/api/v1/users/1/actions')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('POST /api/v1/users/1/actions', () => {
  test('returns status code of 201', () => {
    addNewUserActions.mockResolvedValue()

    expect.assertions(2)
    return request(server)
      .post('/api/v1/users/1/actions')
      .send({ actionIds: [5, 4, 3, 12, 13] })
      .then((res) => {
        expect(res.status).toBe(201)
        expect(addNewUserActions).toHaveBeenCalledWith(1, [5, 4, 3, 12, 13])
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    addNewUserActions.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .post('/api/v1/users/1/actions')
      .send([5, 4, 3, 12, 13])
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('PATCH /api/v1/users/1/actions', () => {
  test('returns status code of 200', () => {
    updateUserAction.mockResolvedValue()

    expect.assertions(2)
    return request(server)
      .patch('/api/v1/users/1/actions')
      .send({ userActionId: 1, status: true })
      .then((res) => {
        expect(res.status).toBe(201)
        expect(updateUserAction).toHaveBeenCalledWith(1, true)
        return null
      })
  })

  test('returns a status code of 404 and appropriate error message if user not found', () => {
    getUser.mockResolvedValue()
    updateUserAction.mockResolvedValue(0)

    expect.assertions(3)
    return request(server)
      .get('/api/v1/users/999')
      .then((res) => {
        expect(res.status).toBe(404)
        expect(res.body.message).toBe('No user with that corresponding ID was found')
        expect(updateUserAction).not.toHaveBeenCalled()
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUser.mockResolvedValue(true)
    updateUserAction.mockRejectedValue(new Error('not working'))

    expect.assertions(2)
    return request(server)
      .patch('/api/v1/users/1/actions')
      .send({ userActionId: 1, status: true })
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

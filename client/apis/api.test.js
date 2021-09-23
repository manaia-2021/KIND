import nock from 'nock'
import { addNewUserActions, createUser, getLeaderboard, getUser, getUserActions, updateUserAction } from './api'

describe('createUser', () => {
  test('send user to api/v1/users and return res.body', () => {
    expect.assertions(2)

    const scope = nock('http://localhost:80')
      .post('/api/v1/users', { name: 'test name', username: 'testusername', email: 'test@gmail.com' })
      .reply(201, { status: 'success', data: { id: 7 } })

    const user = { name: 'test name', username: 'testusername', email: 'test@gmail.com' }
    return createUser(user).then((id) => {
      expect(id).toBe(7)
      expect(scope.isDone()).toBeTruthy()
      return null
    })
  })
})

describe('getUser', () => {
  test('get request to api/v1/users/1 and return res.body', () => {
    expect.assertions(2)

    const scope = nock('http://localhost:80')
      .get('/api/v1/users/1')
      .reply(200, { status: 'success', data: { user: { name: 'test name', user_name: 'test1', avatar_url: '/images/avatar.jpg', points: 500 } } })

    return getUser(1).then((user) => {
      expect(user.name).toBe('test name')
      expect(scope.isDone()).toBeTruthy()
      return null
    })
  })
})

describe('getUserActions', () => {
  test('get request to api/v1/users/1/actions and return res.body', () => {
    expect.assertions(3)

    const scope = nock('http://localhost:80')
      .get('/api/v1/users/1/actions')
      .reply(200, { status: 'success', data: { userActions: [{ id: 1, user_id: 1, action_id: 1, completed: true }] } })

    return getUserActions(1).then((userActions) => {
      expect(userActions).toHaveLength(1)
      expect(userActions[0].id).toBe(1)
      expect(scope.isDone()).toBeTruthy()
      return null
    })
  })
})

describe('addNewUserActions', () => {
  test('POST request to api/v1/users/1/actions returning null', () => {
    expect.assertions(1)

    const scope = nock('http://localhost:80')
      .post('/api/v1/users/1/actions')
      .reply(201)

    return addNewUserActions(1).then((userActions) => {
      expect(scope.isDone()).toBeTruthy()
      return null
    })
  })
})

describe('updateUserAction', () => {
  test('PATCH request to api/v1/users/1/actions returning null', () => {
    expect.assertions(1)

    const scope = nock('http://localhost:80')
      .patch('/api/v1/users/1/actions', { userActionId: 5, status: true })
      .reply(201)

    return updateUserAction(1, 5, true).then(() => {
      expect(scope.isDone()).toBeTruthy()
      return null
    })
  })
})

describe('getLeaderboard', () => {
  test('get request to api/v1/leaderboard and return res.body', () => {
    expect.assertions(3)

    const scope = nock('http://localhost:80')
      .get('/api/v1/leaderboard')
      .reply(200, { status: 'success', data: { users: [{ username: 'test1', points: 500 }, { username: 'test2', points: 1000 }] } })

    return getLeaderboard().then((users) => {
      expect(users).toHaveLength(2)
      expect(users[0].username).toBe('test1')
      expect(scope.isDone()).toBeTruthy()
      return null
    })
  })
})

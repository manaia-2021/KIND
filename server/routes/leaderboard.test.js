const request = require('supertest')
const server = require('../server')
const { getUsersByPoints } = require('../db/db')

jest.mock('../db/db')

describe('GET /api/v1/leaderboard', () => {
  test('returns status code of 200 and list of users scores', () => {
    getUsersByPoints.mockImplementation(() => Promise.resolve([{ username: 'username1', points: 500 }, { username: 'username2', points: 100 }]))

    expect.assertions(4)
    return request(server)
      .get('/api/v1/leaderboard')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.status).toBe('success')
        expect(res.body.data.users).toHaveLength(2)
        expect(res.body.data).toEqual({ users: [{ username: 'username1', points: 500 }, { username: 'username2', points: 100 }] })
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getUsersByPoints.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(3)
    return request(server)
      .get('/api/v1/leaderboard')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.status).toBe('error')
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

const request = require('supertest')
const server = require('../server')
const { getUsers } = require('../db/db')

jest.mock('../db/db')

describe('/api/v1/users', () => {
  test('returns status code of 200 and list of all users in the database', () => {
    getUsers.mockImplementation(() =>
      Promise.resolve([
        { id: 1, name: 'user 1' },
        { id: 2, name: 'user 2' }
      ])
    )
    expect.assertions(3)
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        // console.log(res)
        expect(res.status).toBe(200)
        expect(res.body).toBe('something')
        expect(res.body.users).toHaveLength(2)
        return null
      })
  })
})

// describe('POST /api/v1/todos', () => {
//   test('return status code of 201 and the id of the newly created todo', () => {
//     create.mockImplementation(() => Promise.resolve([5]))
//     expect.assertions(3)
//     return request(server)
//       .post('/api/v1/todos')
//       .send({ todo: 'task name' })
//       .then((res) => {
//         expect(res.body).toBe(5)
//         expect(res.status).toBe(201)
//         expect(create).toHaveBeenCalledWith('task name')
//         return null
//       })
//   })

//   test('return error if db fails', () => {
//     create.mockImplementation(() => Promise.reject(new Error('not working')))

//     return request(server)
//       .post('/api/v1/todos')
//       .send({ todo: 'please work' })
//       .then((res) => {
//         expect(res.status).toBe(500)
//         return null
//       })
//   })
// })

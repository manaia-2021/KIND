const request = require('supertest')
const server = require('../server')
const { getAllCategories, getActionsByCategory } = require('../db/db')

jest.mock('../db/db')

describe('GET /api/v1/categories', () => {
  test('returns status code of 200 and list of all categories in the database', () => {
    getAllCategories.mockImplementation(() =>
      Promise.resolve([{ id: 101, title: 'travel' }, { id: 102, title: 'energy' }])
    )

    expect.assertions(3)
    return request(server)
      .get('/api/v1/categories')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.categories).toHaveLength(2)
        expect(res.body.data).toEqual({ categories: [{ id: 101, title: 'travel' }, { id: 102, title: 'energy' }] })
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getAllCategories.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(2)
    return request(server)
      .get('/api/v1/categories')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

describe('GET /api/v1/categories/101/actions', () => {
  test('returns status code of 200 and list of all actions belonging to that category', () => {
    getActionsByCategory.mockImplementation(() =>
      Promise.resolve([{ id: 1, category_id: 101, title: 'travel', description: 'Purchase electric vehicle', points: 100 },
        { id: 2, category_id: 101, title: 'travel', description: 'Telecommute to work', points: 20 }])
    )

    expect.assertions(3)
    return request(server)
      .get('/api/v1/categories/101/actions')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.actions).toHaveLength(2)
        expect(res.body.data.actions[0]).toEqual({ id: 1, category_id: 101, title: 'travel', description: 'Purchase electric vehicle', points: 100 })
        return null
      })
  })

  test('returns status code of 404 if category id or actions are not found', () => {
    getActionsByCategory.mockImplementation(() =>
      Promise.resolve([])
    )

    expect.assertions(1)
    return request(server)
      .get('/api/v1/categories/999/actions')
      .then((res) => {
        expect(res.status).toBe(404)
        return null
      })
  })

  test('returns status code of 500 on error with appropriate error message', () => {
    getActionsByCategory.mockImplementation(() => Promise.reject(new Error('not working')))

    expect.assertions(2)
    return request(server)
      .get('/api/v1/categories/101/actions')
      .then(res => {
        expect(res.status).toBe(500)
        expect(res.body.message).toBe('Backend server error')
        return null
      })
  })
})

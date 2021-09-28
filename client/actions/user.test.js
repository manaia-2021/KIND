import { FETCH_USER, fetchUserProfile } from './user'

import { findOrCreateUser } from '../apis/api'

jest.mock('../apis/api')

describe('fetchUserByProfile', () => {
  const testUser = { id: 8, name: 'test name', user_name: 'testuser', email_address: 'test@gmail.com', avatar_url: 'https://avatars.dicebear.com/api/bottts/211.svg', points: 0 }
  test('call api client and dispatch action if successful', () => {
    findOrCreateUser.mockResolvedValue(testUser)
    expect.assertions(3)
    const dispatch = jest.fn()
    return fetchUserProfile({ name: 'test name', email: 'test@gmail.com' })(dispatch).then(() => {
      const action = dispatch.mock.calls[0][0]
      expect(action.type).toBe(FETCH_USER)
      expect(action.payload).toBe(testUser)
      expect(findOrCreateUser).toHaveBeenCalledWith({ name: 'test name', email: 'test@gmail.com' })
      return null
    })
  })
})

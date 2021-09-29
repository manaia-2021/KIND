import userReducer from './user'
import { fetchUserProfile, FETCH_USER } from '../actions/user'

describe('userReducer', () => {
  const mockUser = { id: 8, name: 'test name', user_name: 'testuser', email_address: 'test@gmail.com', avatar_url: 'https://avatars.dicebear.com/api/bottts/211.svg', points: 0 }

  test('should return initial state of an empty object', () => {
    expect(userReducer(undefined, {})).toEqual({})
  })

  test('should handle FETCH_USER', () => {
    const fetchUserAction = {
      type: FETCH_USER,
      payload: mockUser
    }

    expect(userReducer({}, fetchUserAction)).toEqual(mockUser)
  })
})

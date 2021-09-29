import { findOrCreateUser } from '../apis/api'

export const FETCH_USER = 'FETCH_USER'

export function fetchUserProfile ({ name, email }) {
  return async (dispatch) => {
    try {
      const foundUser = await findOrCreateUser({ name, email })
      dispatch({ type: FETCH_USER, payload: foundUser })
      return null
    } catch (err) {
      console.log(err)
    }
  }
}

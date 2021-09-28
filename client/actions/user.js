import { getUserByEmail, createUser } from '../apis/api'

export const FETCH_USER = 'FETCH_USER'

export function fetchUserProfile ({ name, email }) {
  return async (dispatch) => {
    try {
      let foundUser = await getUserByEmail(email)
      if (!foundUser) {
        await createUser({ name, email })
        foundUser = await getUserByEmail(email)
      }
      dispatch({ type: FETCH_USER, payload: foundUser })
      return null
    } catch (err) {
      console.log(err)
    }
  }
}

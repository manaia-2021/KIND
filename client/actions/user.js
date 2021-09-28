import { getUserByEmail, createUser } from '../apis/api'

export const FETCH_USER = 'FETCH_USER'

export function fetchUserProfile ({ name, email }) {
  return async (dispatch) => {
    try {
      console.log(name, email)
      let foundUser = await getUserByEmail(email)
      console.log('found user', foundUser)
      if (!foundUser) {
        console.log('creating user')
        await createUser({ name, email })
        foundUser = await getUserByEmail(email)
        console.log('new usre created', foundUser)
      }
      dispatch({ type: FETCH_USER, payload: foundUser })
      return null
    } catch (err) {
      console.log(err)
    }
  }
}

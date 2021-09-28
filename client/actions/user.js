import { getUserByEmail } from '../apis/api'

export const FETCH_USER = 'FETCH_USER'

export function fetchUserProfile (email) {
  return (dispatch) => {
    return getUserByEmail(email)
      .then(user => {
        dispatch({ type: FETCH_USER, payload: user })
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }
}

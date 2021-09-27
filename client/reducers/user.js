import { FETCH_USER } from '../actions/user'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer

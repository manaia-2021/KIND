import request from 'superagent'

const rootUrl = '/api/v1'

export const createUser = (user) => {
  // user needs to be object containing name, email address, googleId
  return request.post(`${rootUrl}/users`).send(user)
    .then(res => {
      return res.body.data.id
    })
}

export const getUser = (userId) => {
  return request
    .get(`${rootUrl}/users/${userId}`)
    .then(res => {
      return res.body.data.user
    })
}

// Get users for leaderboard
export const getLeaderboard = () => {
  return request
    .get(`${rootUrl}/leaderboard`)
    .then((res) => {
      return res.body.data.users
    })
}

// get current actions of user - also send auth token
export const getUserActions = (userId) => {
  return request
    .get(`${rootUrl}/users/${userId}/actions`)
    .then((res) => {
      return res.body.data.userActions
    })
}

// add new user actions
export const addNewUserActions = (userId, actionIds) => {
  return request
    .post(`${rootUrl}/users/${userId}/actions`)
    .send({ actionIds: actionIds })
    .then(() => {
      return null
    })
}

//
export const updateUserAction = (userId, userActionId, status) => {
  return request
    .patch(`${rootUrl}/users/${userId}/actions`)
    .send({ userActionId, status })
    .then(() => {
      return null
    })
}

// Get all categories - use to pouplate the category page
export const getCategories = () => {
  request
    .get(`${rootUrl}/categories`)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
    })
}

// Get actions under a specific category
export const getCategoryActions = (categoryId) => {
  request
    .get(`${rootUrl}/categories/${categoryId}/actions`)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
    })
}

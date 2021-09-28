import request from 'superagent'

const rootUrl = '/api/v1'

// get all users
export const getUsers = () => {
  return request
    .get(`${rootUrl}/users`)
    .then((res) => {
      return res.body.data.users
    })
}

export const createUser = ({ name, email }) => {
  return request.post(`${rootUrl}/users`).send({ name, email })
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

// get the user by email address
export const getUserByEmail = (userEmail) => {
  return request
    .get(`${rootUrl}/users/email/${userEmail}`)
    .then(res => {
      if (res.status === 404) return null
      return res.body.data.user
    })
    .catch(() => {
      return null
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

export const deleteUser = (userId) => {
  return request
    .delete(`${rootUrl}/users/${userId}`)
    .then(() => {
      return null
    })
}

// Get all categories - use to pouplate the category page
export const getCategories = () => {
  return request
    .get(`${rootUrl}/categories`)
    .then((res) => {
      return res.body.data.categories
    })
}

// Get actions under a specific category
export const getCategoryActions = (categoryId) => {
  return request
    .get(`${rootUrl}/categories/${categoryId}/actions`)
    .then((res) => {
      return res.body.data.actions
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

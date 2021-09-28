import request from 'superagent'

const rootUrl = '/api/v1'

export const getUsers = () => {
  return request
    .get(`${rootUrl}/users`)
    .then((res) => {
      return res.body.data.users
    })
}

export const createUser = (user) => {
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

export const getUserByEmail = (userEmail) => {
  return request
    .get(`${rootUrl}/users/email/${userEmail}`)
    .then(res => {
      return res.body.data.user
    })
}

// get current actions of a specific user
export const getUserActions = (userId) => {
  return request
    .get(`${rootUrl}/users/${userId}/actions`)
    .then((res) => {
      return res.body.data.userActions
    })
}

export const addNewUserActions = (userId, actionIds) => {
  return request
    .post(`${rootUrl}/users/${userId}/actions`)
    .send({ actionIds: actionIds })
    .then(() => {
      return null
    })
}

export const updateUserAction = (userId, userActionId, status) => {
  return request
    .patch(`${rootUrl}/users/${userId}/actions`)
    .send({ userActionId, status })
    .then(() => {
      return null
    })
}

export const updateUserPoints = (userId, points) => {
  return request
    .patch(`${rootUrl}/users/${userId}/points`)
    .send({ points })
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

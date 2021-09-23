import request from 'superagent'

const rootUrl = '/api/v1'

export const createUser = (user) => {
  // user needs to be object containing name, email address, googleId
  request.post(`${rootUrl}/users`).send(user)
}

// can be used to populate the leaderboard
export const getUsers = () => {
  request
    .get(`${rootUrl}/users`)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
    })
}

// Use to get information for specific userId - also need to send auth token
export const getUser = (userId) => {
  request
    .get(`${rootUrl}/users/${userId}`)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
    })
}

// get current actions of user - also send auth token
export const getUserActions = (userId) => {
  request
    .get(`${rootUrl}/users/${userId}/actions`)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
    })
}

// add new user action
export const createUserAction = (userId, actionId) => {
  request
    .post(`${rootUrl}/users/${userId}/actions`)
    .send(actionId)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
    })
}

//
export const updateUserAction = (userId, userActionId, status) => {
  request
    .put(`${rootUrl}/users/${userId}/actions/${userActionId}`)
    .send(status)
    .then((res) => {
      console.log(res)
      return null
    })
    .catch((err) => {
      console.error(err)
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

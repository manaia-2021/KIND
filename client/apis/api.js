import request from 'superagent'

const rootUrl = '/api/v1'

export const createUser = (user) => {
  // user needs to be object containing name, username??, default avatar?, authId
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

export const updateUserActions = (userId, actions) => {
  request
    .put(`${rootUrl}/users/${userId}/actions`)
    .send(actions)
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

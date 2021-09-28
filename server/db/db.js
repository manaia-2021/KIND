const { generateUsername, getRandomAvatar } = require('../utils')
const connection = require('./connection')

module.exports = {
  getAllActions,
  getAllCategories,
  getAllUsers,
  getUser,
  getUserByEmail,
  deleteUser,
  getUsersByPoints,
  updateUserAction,
  addNewUserActions,
  addNewUser,
  getActionsByCategory,
  getUserActionByUser,
  updateUserPoints
}

// Add a new user
function addNewUser (user, db = connection) {
  const { name } = user
  const { email } = user
  const randomUsername = generateUsername()
  const avatarUrl = getRandomAvatar()

  return db('users')
    .insert({ name, user_name: randomUsername, avatar_url: avatarUrl, email_address: email })
}

// Get all users
function getAllUsers (db = connection) {
  return db('users')
    .select()
}

// Get a specific user
function getUser (id, db = connection) {
  return db('users')
    .first()
    .where('id', id)
}

// Get a specific user by email
function getUserByEmail (email, db = connection) {
  return db('users')
    .first()
    .where('email_address', email)
}

// Get users ordered by highest number of points for the leaderboard
// return username and points
function getUsersByPoints (db = connection) {
  return db('users')
    .select('user_name', 'points', 'avatar_url')
    .orderBy('points', 'desc')
}

// Delete user
function deleteUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .del()
}

// Get all categories
function getAllCategories (db = connection) {
  return db('category')
    .select()
}

// Get all actions
function getAllActions (db = connection) {
  return db('action')
    .select()
}

// Get actions by category
function getActionsByCategory (id, db = connection) {
  return db('action')
    .select()
    .where('category_id', id)
}

// Get user actions by user id
function getUserActionByUser (id, db = connection) {
  return db('user_action')
    .join('action', 'action_id', '=', 'action.id')
    .select()
    .where('user_id', id)
}

// Add new action to user
function addNewUserActions (userId, actionIds, db = connection) {
  const dataToInsert = actionIds.map(actionId => {
    return { user_id: userId, action_id: actionId }
  })

  return db('user_action')
    .insert(dataToInsert)
}

// Update user action
function updateUserAction (actionId, status, db = connection) {
  return db('user_action')
    .where('action_id', actionId)
    .update({
      completed: status
    })
}

function updateUserPoints (id, points, db = connection) {
  return db('users').where('id', id).update({ points })
}

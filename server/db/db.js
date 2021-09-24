const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getAllActions,
  getAllCategories,
  getAllUsers,
  getUser,
  deleteUser,
  getUsersByPoints,
  updateUserAction,
  addNewUserActions,
  addNewUser,
  getActionsByCategory,
  getUserActionByUser
}

// Add a new user
function addNewUser (user, db = database) {
  return db('users')
    .insert(user)
}

// Get all users
function getAllUsers (db = database) {
  return db('users')
    .select()
}

// Get a specific user
function getUser (id, db = database) {
  return db('users')
    .first()
    .where('id', id)
}

// Get users ordered by highest number of points for the leaderboard
// return username and points
function getUsersByPoints (db = database) {
  return db('users')
    .select()
    .orderBy('points', 'desc')
}

// Delete user
function deleteUser (id, db = database) {
  return db('users')
    .where('id', id)
    .del()
}

// Get all categories
function getAllCategories (db = database) {
  return db('category')
    .select()
}

// Get all actions
function getAllActions (db = database) {
  return db('action')
    .select()
}

// Get actions by category
function getActionsByCategory (id, db = database) {
  return db('action')
    .select()
    .where('category_id', id)
}

// Get user actions by user id
function getUserActionByUser (id, db = database) {
  return db('user_action')
    .join('action', 'action_id', '=', 'action.id')
    .select()
    .where('user_id', id)
}

// Add new action to user
function addNewUserActions (userId, actionId, db = database) {
  return db('user_action')
    .insert({ user_id: userId, action_id: actionId })
}

// Update user action
function updateUserAction (id, status, db = database) {
  return db('user_action')
    .first()
    .where('id', id)
    .update({
      completed: status
    })
}

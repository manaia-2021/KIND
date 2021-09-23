const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      res.status(200).json({ status: 'success', data: { users } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getUser(Number(id))
    .then((user) => {
      res.status(200).json({ status: 'success', data: { user: user[0] } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.post('/', (req, res) => {
  const { name, username } = req.body
  db.addNewUser({ name, username })
    .then((ids) => {
      res.status(201).json({ status: 'success', data: { id: ids[0] } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.deleteUser(Number(id))
    .then(() => {
      res.sendStatus(204)
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params
  db.getUserActionByUser(Number(id))
    .then(actions => {
      res.status(200).json({ status: 'success', data: { actions } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.post('/:id/actions', (req, res) => {
  const { id } = req.params
  const { actionIds } = req.body

  db.addNewUserActions(Number(id), actionIds)
    .then(() => {
      res.status(201).json({ status: 'success' })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.patch('/:id/actions', (req, res) => {
  const { id } = req.params
  const { userActionId, status } = req.body

  db.updateUserAction(userActionId, status)
    .then(() => {
      res.status(201).json({ status: 'success' })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

module.exports = router

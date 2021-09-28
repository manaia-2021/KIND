const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      res.status(200).json({ data: { users } })
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  db.getUser(Number(id))
    .then((user) => {
      if (!user) return res.status(404).json({ message: 'No user with that corresponding ID was found' })
      return res.status(200).json({ data: { user: user } })
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
    })
})

router.get('/email/:email', (req, res) => {
  const { email } = req.params
  db.getUserByEmail(email)
    .then((user) => {
      if (!user) return res.status(404).json({ message: 'No user with that email address was found' })
      return res.status(200).json({ data: { user: user } })
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
    })
})

router.post('/', (req, res) => {
  const { name, email } = req.body
  db.addNewUser({ name, email })
    .then((ids) => {
      res.status(201).json({ data: { id: ids[0] } })
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
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
      res.status(500).json({ message: 'Backend server error' })
    })
})

router.get('/:id/actions', async (req, res) => {
  const { id } = req.params

  try {
    const user = await db.getUser(Number(id))
    if (!user) return res.status(404).json({ message: 'No user of that ID exists' })

    const userActions = await db.getUserActionByUser(Number(id))
    res.status(200).json({ data: { userActions } })
  } catch (err) {
    res.status(500).json({ message: 'Backend server error' })
  }
})

router.post('/:id/actions', (req, res) => {
  const { id } = req.params
  const { actionIds } = req.body

  db.addNewUserActions(Number(id), actionIds)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
    })
})

router.patch('/:id/actions', async (req, res) => {
  const { id } = req.params
  const { userActionId, status } = req.body
  try {
    const user = await db.getUser(Number(id))
    if (!user) return res.status(404).json({ message: 'No user with that corresponding ID was found' })

    await db.updateUserAction(userActionId, status)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).json({ message: 'Backend server error' })
  }
})

router.patch('/:id/points', async (req, res) => {
  const { id } = req.params
  const { points } = req.body
  try {
    const user = await db.getUser(Number(id))
    if (!user) return res.status(404).json({ message: 'No user with that corresponding ID was found' })

    await db.updateUserPoints(Number(id), points)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).json({ message: 'Backend server error' })
  }
})

module.exports = router

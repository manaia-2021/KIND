const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllCategories()
    .then((categories) => {
      res.status(200).json({ status: 'success', data: { categories } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params

  db.getActionsByCategory(Number(id))
    .then((actions) => {
      if (!actions.length) return res.status(404).json({ status: 'error', message: 'no category of that ID or no actions found' })
      res.status(200).json({ status: 'success', data: { actions } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

module.exports = router

const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllCategories()
    .then((categories) => {
      res.status(200).json({ data: { categories } })
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
    })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params

  if (!Number(id)) return res.status(400).json({ message: 'Invalid category Id in route parameter' })

  db.getActionsByCategory(Number(id))
    .then((actions) => {
      if (!actions.length) return res.status(404).json({ message: 'no category of that ID or no actions found' })
      res.status(200).json({ data: { actions } })
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Backend server error' })
    })
})

module.exports = router

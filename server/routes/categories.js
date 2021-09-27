const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllCategories()
    .then((categories) => {
      // I think the status flag is redundant - your client side code can just check the status code
      res.status(200).json({ status: 'success', data: { categories } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params
  // I would check to see if id is legit i.e.
  // if (~Number(id)) return res.status(400).json({message: 'invalid id'}) etc.
  db.getActionsByCategory(Number(id))
    .then((actions) => {
      // great error handling, as mentioned above I don't think you need the status: 'error' part of the r esponse
      if (!actions.length) return res.status(404).json({ status: 'error', message: 'no category of that ID or no actions found' })
      res.status(200).json({ status: 'success', data: { actions } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

module.exports = router

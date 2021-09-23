const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getUsersByPoints()
    .then((users) => {
      res.status(200).json({ status: 'success', data: { users } })
      return null
    })
    .catch(() => {
      res.status(500).json({ status: 'error', message: 'Backend server error' })
    })
})

module.exports = router

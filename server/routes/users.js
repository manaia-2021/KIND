const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  // obtain list of all users from db
  res.send('hitting user routes')
  db.getUsers()
    .then((users) => {
      res.status(200).json({ users })
      return null
    })
    .catch((err) => {
      // console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/:id', (req, res) => {
  // get user info of specific id
  res.send('hitting user id route')

  // .catch(err => {
  //   console.log(err)
  //   res.status(500).json({ message: 'Somthing went wrong' })
  // })
})

router.get('/:id/actions', (req, res) => {
  // get actions related to a specific user id
  res.send('hitting user id action route')

  // .catch(err => {
  //   console.log(err)
  //   res.status(500).json({ message: 'Somthing went wrong' })
  // })
})

module.exports = router

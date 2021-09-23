const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // obtain all categories from db and send to front end
  res.send('hitting category routes')
  // .catch(err => {
  //   console.log(err)
  //   res.status(500).json({ message: 'Somthing went wrong' })
  // })
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params
  // get actions associated with specific category ID and send to front end
  res.send('hitting action routes')
})

module.exports = router

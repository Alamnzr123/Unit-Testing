const express = require('express')
const { destroy, detail, index, store, update } = require('../controller/user.controller')

const router = express.Router()

router
  .post('/send', store)
  .get('/user', index)
  .get('/user/:id', detail)
  .delete('/destroy/:id', destroy)
  .put('/user/:id', update)

module.exports = router

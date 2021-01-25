const express = require('express')

const router = express.Router()

const indexController = require('../controllers/index')

// / => GET
router.get('/', indexController.getIndex)

// / => POST
router.post('/', indexController.postIndex)

// /delete => POST
router.post('/delete', indexController.postDeleteData)


module.exports = router
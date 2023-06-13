const sql = require('mssql')
const express = require('express')
const router = express.Router()
const { videoGetAllController } = require('../Controllers/videoController')

//get all videos
router.get('/home', videoGetAllController)

module.exports = router
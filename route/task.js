const express = require('express')
const router = express.Router()
const {getAllitem, createitem,delteitem,updateitem} = require('../controller/control')

router.route('/').get(getAllitem)

module.exports= router
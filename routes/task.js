const express = require('express')
const {mainPage,getAllItem,createAnItem,getAnItem,updateAnItem,deleteAnItem}= require('../controller/task')
const router = express.Router();

//router.route('/').post(createAnItem)

router.route('/api/v1/AllItem').get(getAllItem)
router.route('/:id').get(getAnItem).patch(updateAnItem).delete(deleteAnItem)
router.route('/items').post(createAnItem)

module.exports = router
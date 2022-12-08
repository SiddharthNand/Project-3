const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// // GET /api/items
// router.get('/', itemsCtrl.index);


router.post('/:id', itemsCtrl.create)
router.get('/:id', itemsCtrl.getCart);

module.exports = router;

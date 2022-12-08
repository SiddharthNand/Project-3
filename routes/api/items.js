const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// // GET /api/items
// router.get('/', itemsCtrl.index);
// // GET /api/items/:id
// router.get('/:id', itemsCtrl.show);

router.post('/:id', itemsCtrl.create)


module.exports = router;

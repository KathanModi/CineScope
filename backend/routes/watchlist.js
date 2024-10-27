const express = require('express');
const { getWatchlist, addToWatchlist, removeFromWatchlist } = require('../controllers/userController');
const router = express.Router();

router.get('/:userId', getWatchlist);
router.post('/:userId/add', addToWatchlist);
router.delete('/:userId/remove', removeFromWatchlist);

module.exports = router;

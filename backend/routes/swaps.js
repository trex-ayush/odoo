const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createSwap,
  getMySwaps,
  respondToSwap,
  submitRating,
  completeSwap
} = require('../controller/swaps');

router.post('/', protect, createSwap);
router.get('/', protect, getMySwaps);
router.put('/:id/respond', protect, respondToSwap);
router.put('/:id/rate', protect, submitRating);
router.put('/:id/complete', protect, completeSwap);

module.exports = router;
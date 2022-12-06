const router = require('express').Router();
const {
  // Exported functions from thought-controller
  getThoughts,
  getThoughtById,
  newThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

// Use exported functions from line 3 to create routes

router.route('/').get(getThoughts)
router.route('/:userId').get(getThoughtById)
router.route('/').post(newThought)
router.route('/:userId').put(updateThought)
router.route('/:userId').delete(deleteThought)


module.exports = router;

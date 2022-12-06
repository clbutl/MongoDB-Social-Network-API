const router = require('express').Router();
const {
  // Exported functions from thought-controller
  getThoughts,
  getThoughtById,
  newThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// Use exported functions from line 3 to create routes

router.route('/').get(getThoughts)
router.route('/:userId').get(getThoughtById)
router.route('/').post(newThought)
router.route('/:userId').put(updateThought)
router.route('/:userId').delete(deleteThought)
router.route('/:thoughtId/reactions').post(newReaction)
router.route('/:thoughtId/reactions').delete(deleteReaction)


module.exports = router;

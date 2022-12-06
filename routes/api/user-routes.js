const router = require('express').Router();
const {
  // Exported functions from user controller
  getUsers,
  getUserById,
  newUser,
  updateUser,
  deleteUser,
  // newFriend,
  // deleteFriend
} = require('../../controllers/user-controller');

// Use exported functions from line 3 to create routes

router.route('/').get(getUsers)
router.route('/:userId').get(getUserById)
router.route('/:userId').put(updateUser)
router.route('/:userId').delete(deleteUser)
router.route('/').post(newUser)

module.exports = router;

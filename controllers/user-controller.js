const { User, Thought } = require('../models');


const userController = {
  getUsers(req, res) {
    User.find()
      // .populate({ path: 'thoughts', select: '-__v' })
      // .populate({ path: 'friends', select: '-__v' })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  newUser(req, res) {
    User.create(req.body)
      .then(data => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  updateUser(req, res) {
    User.findOneAndUpdate( { _id: req.params.userId }, { $set: req.body } )
      .then(data => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  deleteUser(req, res) {
    User.findOneAndDelete( { _id: req.params.userId } )
      .then(data => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json
      })
  }
  

}

module.exports = userController;
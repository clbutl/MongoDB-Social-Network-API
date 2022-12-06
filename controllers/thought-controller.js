const { Thought, User } = require('../models');

const thoughtController = {
  getThoughts(req, res) {
    Thought.find()
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  getThoughtById(req, res) {
    Thought.findById(req.params.userId)
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  newThought(req, res) {
    Thought.create(req.body)
      .then(data => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate( { _id: req.params.userId }, { $set: req.body } )
      .then(data => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete( { _id: req.params.userId } )
      .then(data => res.json(data))
      .catch((err) => {
        console.log(err)
        res.status(500).json
      })
  }
};

module.exports = thoughtController;

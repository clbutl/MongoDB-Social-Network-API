const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateFormat
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      reactionSchema
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

// Add virtual
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

// Make model of Thought
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

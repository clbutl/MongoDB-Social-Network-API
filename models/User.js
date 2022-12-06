const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const validateEmail = (email) => {
  const testing = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return testing.test(email)
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [
        validateEmail
      ]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

// Add virtual
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

// Make model of User
const User = model('user', userSchema);

module.exports = User;

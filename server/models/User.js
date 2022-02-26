const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcrypt');
const subscriptionSchema = require('./Subscription');

/*
// import schema from Subscription.js
const subscriptionSchema = require("./Subscription");
*/

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    subscriptions: [subscriptionSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `subsCount` with the number of saved subscriptions the user has
userSchema.virtual('subscriptionCount').get(function () {
  return this.subscriptions.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;

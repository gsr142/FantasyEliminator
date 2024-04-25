const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from ./Player.js
const playerSchema = require('./Player').schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: false,
    },
    lastName: {
      type: String,
      required: true,
      unique: false,
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
    },
    // set playerPicks to be an array of data that adheres to the playerSchema
    playerPicks: [playerSchema],
    remainingQBs: {
      type: Number,
      default: 4
    },
    remainingRBs: {
      type: Number,
      default: 4
    },
    remainingWRs: {
      type: Number,
      default: 4
    },
    remainingTEs: {
      type: Number,
      default: 4
    },
    remainingDSTs: {
      type: Number,
      default: 1
    },
    remainingPKs: {
      type: Number,
      default: 1
    },

  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  profilePicture: {
    type: String // URL or path to profile picture
  },
  userType: {
    type: String,
    enum: ['rider', 'driver'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update the `updatedAt` field before saving
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Instance method to display user information
userSchema.methods.displayInfo = function() {
  return `Name: ${this.name}, Email: ${this.email}, Type: ${this.userType}`;
};

// Static method to find users by type
userSchema.statics.findByType = function(type) {
  return this.find({ userType: type });
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

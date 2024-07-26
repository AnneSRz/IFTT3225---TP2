const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Mongoose schema for User
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
    fullName: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        min: 13
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    location: {
        type: String,
        default: ''
    },
    interests: {
        type: [String],
        default: []
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    avatarUrl: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date,
        default: null
    }
});

// Define and export the Mongoose model for User
const User = mongoose.model('User', userSchema);
module.exports = User;

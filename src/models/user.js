const mongoose = require('mongoose');
const validator = require('validator');

// ****************************User Model****************************
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trime: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is Invalid');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be +ve nuber')
            }
        }
    }, 
    password: {
        type: String,
        required: true,
        minLength: [6, 'Greater than 6 char'],
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Invalid Password');
            }
        }
    }
});

module.exports = User;
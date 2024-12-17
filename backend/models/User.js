const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

let User;

try {
    User = mongoose.model('User');
} catch (error) {
    User = mongoose.model('User', UserSchema, 'users');
}

module.exports = User;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
}, {timestamps:true});

userSchema.methods.toJSON = function() {
    return {
        _id: this.id,
        email: this.email,
        password: this.password
    }
}

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
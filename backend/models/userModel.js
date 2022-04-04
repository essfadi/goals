const moongose = require('mongoose');

const userSchema = moongose.Schema({
    name: {
        type: String,
        required: [true, 'Please, name is required'],
    },
    email: {
        type: String,
        required: [true, 'Please, email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please, password is required'],
    }
}, {
    timestamps: true
});

module.exports = moongose.model('User', userSchema);
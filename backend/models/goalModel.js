const moongose = require('mongoose');

const goalSchema = moongose.Schema({ 
    text: {
        type: String,
        required: [true, 'Goal text is required'],
    },
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Identification is required'],
    }
}, {
    timestamps: true
})

module.exports = moongose.model('Goal', goalSchema);
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comments: [
        {
            username:{
                type: String,
                required: false
            },
            text: {
                type: String,
                required: false
            }
        },
    ],
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('comment', CommentSchema);
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        required: false
    },
    comments: [
        {
            type: String,
            required: false
        },
    ],
    data: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('article', articleSchema);
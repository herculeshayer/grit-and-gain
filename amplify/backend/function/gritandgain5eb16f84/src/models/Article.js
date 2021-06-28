const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        required: false,
        default: "1"
    },
    comments: [
        {
            username:{
                type: String,
                required: false
            },
            text: {
                type: String,
                required: false
            },
            upvote: {
                type: Number,
                requred: false,
                default: "1"
            }
        },
    ],
    articleInfo: {
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
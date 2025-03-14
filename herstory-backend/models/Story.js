const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        enum: ['Entrepreneurship', 'Education', 'Overcoming Barriers', 'Innovation'],
        required: true,
    },
    mediaType: {
        type: String,
        enum: ['text', 'audio', 'video'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Story', StorySchema);
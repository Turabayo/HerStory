const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

// Submit a new story
router.post('/submit', async (req, res) => {
    const { title, content, author, category, mediaType } = req.body;
    try {
        const story = new Story({ title, content, author, category, mediaType });
        await story.save();
        res.status(201).json({ message: 'Story submitted successfully', story });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all stories
router.get('/stories', async (req, res) => {
    try {
        const stories = await Story.find().populate('author', 'name');
        res.status(200).json(stories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
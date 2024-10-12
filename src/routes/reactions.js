const express = require('express');
const router = express.Router();
const posts = require('../posts');  // Import the posts module
const reactions = require('../reactions');  // Assuming you have a reactions module
const middleware = require('../middleware'); // Adjust the path as necessary

// Add reaction to a post
router.post('/post/:pid/reaction', middleware.ensureLoggedIn, async (req, res) => {
    try {
        const { pid } = req.params;
        const { uid, emoji } = req.body;

        await reactions.addReaction(pid, uid, emoji);
        res.json({ success: true });
    } catch (error) {
        console.error('Error adding reaction:', error);
        res.status(500).json({ success: false, error: 'Failed to add reaction' });
    }
});

// Remove reaction from a post
router.delete('/post/:pid/reaction', middleware.ensureLoggedIn, async (req, res) => {
    try {
        const { pid } = req.params;
        const { uid, emoji } = req.body;

        await reactions.removeReaction(pid, uid, emoji);
        res.json({ success: true });
    } catch (error) {
        console.error('Error removing reaction:', error);
        res.status(500).json({ success: false, error: 'Failed to remove reaction' });
    }
});

module.exports = router;


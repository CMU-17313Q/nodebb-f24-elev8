const express = require('express');
const router = express.Router();
const reactions = require('../reactions');  // Assuming you have a reactions module

// Add reaction to a post
router.post('/post/:pid/reaction', async (req, res) => {
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
router.delete('/post/:pid/reaction', async (req, res) => {
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

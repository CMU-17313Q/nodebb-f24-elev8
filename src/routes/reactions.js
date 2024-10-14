const express = require('express');
const router = express.Router();
const reactions = require('../reactions');  // Assuming you have a reactions module

// Add reaction to a message in a room
router.post('/room/:roomId/reaction', async (req, res) => {
    try {
        const { roomId } = req.params;
        const { uid, emoji } = req.body;

        await reactions.addReaction(roomId, uid, emoji);
        res.json({ success: true });
    } catch (error) {
        console.error('Error adding reaction:', error);
        res.status(500).json({ success: false, error: 'Failed to add reaction' });
    }
});

// Remove reaction from a message in a room
router.delete('/room/:roomId/reaction', async (req, res) => {
    try {
        const { roomId } = req.params;
        const { uid, emoji } = req.body;

        await reactions.removeReaction(roomId, uid, emoji);
        res.json({ success: true });
    } catch (error) {
        console.error('Error removing reaction:', error);
        res.status(500).json({ success: false, error: 'Failed to remove reaction' });
    }
});

module.exports = router;
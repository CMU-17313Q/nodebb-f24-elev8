// will add a reaction to a message in the given roomId
'use strict';

const reactions = require('../reactions');
const helpers = require('./helpers');

const reactionsController = module.exports;

reactionsController.addReaction = async function (req, res) {
    try {
        const { roomId, uid, emoji } = req.body;
        await reactions.addReaction(roomId, uid, emoji);
        res.json({ success: true });
    } catch (error) {
        console.error('Error adding reaction:', error);
        res.status(500).json({ success: false, error: 'Failed to add reaction' });
    }
};

reactionsController.removeReaction = async function (req, res) {
    try {
        const { roomId, uid, emoji } = req.body;
        await reactions.removeReaction(roomId, uid, emoji);
        res.json({ success: true });
    } catch (error) {
        console.error('Error removing reaction:', error);
        res.status(500).json({ success: false, error: 'Failed to remove reaction' });
    }
};

reactionsController.getReactions = async function (req, res) {
    try {
        const { roomId } = req.params;
        const reactionsData = await reactions.getReactions(roomId);
        res.json(reactionsData);
    } catch (error) {
        console.error('Error getting reactions:', error);
        res.status(500).json({ success: false, error: 'Failed to get reactions' });
    }
};

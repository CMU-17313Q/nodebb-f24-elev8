'use strict';
const SocketPlugins = require.main.require('./src/socket.io/plugins');
const user = require.main.require('./src/user');
const db = require.main.require('./src/database'); // Require the database module

// Namespace for emoji reactions

SocketPlugins.emojiReactions = {};
// Method to handle adding a reaction
SocketPlugins.emojiReactions.addReaction = async function(socket, data, callback) {
    const { roomId, messageId, emoji } = data;
    try {
      
        console.log('Reaction:', emoji);
        console.log('Room ID:', roomId);
        console.log('Message ID:', messageId);
        console.log('User ID:', socket.uid);
                
        if (!roomId || !messageId || !emoji) {
            return callback(new Error('Missing required fields'));
        }

        await require('../reaction').addReaction(roomId, messageId, emoji); // Update path to the reactions module
        
        // Emit reaction added to the room
        socket.server.in(`chat_room_${roomId}`).emit('event:reactionAdded', {
            messageId: messageId,
            emoji: emoji,
            userId: socket.uid,
        });

        callback(null, { success: true });
    } catch (err) {
        console.error('Error adding reaction:', err);
        callback(err);
    }
};

// Method to handle removing a reaction
SocketPlugins.emojiReactions.removeReaction = async function(socket, data, callback) {
    try {
        const { roomId, messageId, emoji } = data;
        await require('../reaction').removeReaction(roomId, messageId, emoji); // Update path to the reactions module
        callback(null, { success: true });
    } catch (err) {
        console.error('Error removing reaction:', err);
        callback(err);
    }
};

module.exports = SocketPlugins; // Ensure this line is included

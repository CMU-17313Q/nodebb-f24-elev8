'use strict';

const SocketPlugins = {};

/*
    This file is provided exclusively so that plugins can require it and add their own socket listeners.

    How? From your plugin:

        const SocketPlugins = require.main.require('./src/socket.io/plugins');
        SocketPlugins.myPlugin = {};
        SocketPlugins.myPlugin.myMethod = function(socket, data, callback) { ... };

    Be a good lad and namespace your methods.
*/

// Namespace for emoji reactions
SocketPlugins.emojiReactions = {};

// Method to handle adding a reaction for any emoji
SocketPlugins.emojiReactions.addReaction = async function(socket, data, callback) {
    try {
        const { pid, uid, emoji } = data; // Expect emoji to be passed in the data
        const validEmojis = ['👍', '❤️', '😂']; // List of valid emojis
		console.log(`User ${uid} added reaction ${emoji} to post ${pid}`);
        if (!validEmojis.includes(emoji)) {
            return callback(new Error('Invalid emoji'));
        }
        await require('../reactions').addReaction(pid, uid, emoji);
        callback(null, { success: true });
    } catch (err) {
        callback(err);
    }
};

// Method to handle removing a reaction for any emoji
SocketPlugins.emojiReactions.removeReaction = async function(socket, data, callback) {
    try {
        const { pid, uid, emoji } = data; // Expect emoji to be passed in the data
        const validEmojis = ['👍', '❤️', '😂']; // List of valid emojis
        if (!validEmojis.includes(emoji)) {
            return callback(new Error('Invalid emoji'));
        }
        await require('../reactions').removeReaction(pid, uid, emoji);
        callback(null, { success: true });
    } catch (err) {
        callback(err);
    }
};

module.exports = SocketPlugins;

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

// Method to handle adding a reaction
SocketPlugins.emojiReactions.addReaction = async function(socket, data, callback) {
    try {
        const { roomId, uid, emoji } = data;
        await require('../reactions').addReaction(roomId, uid, emoji);
        callback(null, { success: true });
    } catch (err) {
        callback(err);
    }
};

// Method to handle removing a reaction
SocketPlugins.emojiReactions.removeReaction = async function(socket, data, callback) {
    try {
        const { roomId, uid, emoji } = data;
        await require('../reactions').removeReaction(roomId, uid, emoji);
        callback(null, { success: true });
    } catch (err) {
        callback(err);
    }
};

module.exports = SocketPlugins;

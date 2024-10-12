'use strict';

const db = require('../database');
const plugins = require('../plugins');
const socketIO = require('../socket.io'); // Assuming you have a socket.io instance

module.exports = {
    async addReaction(pid, uid, emoji) {
        await db.sortedSetAdd(`post:${pid}:reactions:${emoji}`, Date.now(), uid);
        await plugins.hooks.fire('action:post.reaction.add', { pid, uid, emoji });

        // Emit WebSocket event
        socketIO.server.sockets.emit('reaction:add', { pid, uid, emoji });
    },

    async removeReaction(pid, uid, emoji) {
        await db.sortedSetRemove(`post:${pid}:reactions:${emoji}`, uid);
        await plugins.hooks.fire('action:post.reaction.remove', { pid, uid, emoji });

        // Emit WebSocket event
        socketIO.server.sockets.emit('reaction:remove', { pid, uid, emoji });
    },

    async getReactions(pid) {
        const emojis = await db.getSortedSetRange(`post:${pid}:reactions`, 0, -1);
        const reactions = {};
        for (const emoji of emojis) {
            reactions[emoji] = await db.sortedSetCard(`post:${pid}:reactions:${emoji}`);
        }
        return reactions;
    }
};

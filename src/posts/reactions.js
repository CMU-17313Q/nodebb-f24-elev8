'use strict';

const db = require('../database');
const plugins = require('../plugins');

module.exports = {
    async addReaction(pid, uid, emoji) {
        await db.sortedSetAdd(`post:${pid}:reactions:${emoji}`, Date.now(), uid);
        await plugins.hooks.fire('action:post.reaction.add', { pid, uid, emoji });
    },

    async removeReaction(pid, uid, emoji) {
        await db.sortedSetRemove(`post:${pid}:reactions:${emoji}`, uid);
        await plugins.hooks.fire('action:post.reaction.remove', { pid, uid, emoji });
    },

    async getReactions(pid) {
        const reactions = {};
        const emojis = await db.getSortedSetRange(`post:${pid}:reactions`, 0, -1);
        for (const emoji of emojis) {
            reactions[emoji] = await db.sortedSetCard(`post:${pid}:reactions:${emoji}`);
        }
        return reactions;
    }
};

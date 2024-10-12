'use strict';

const db = require('../database');

const Reactions = module.exports;

// Add a reaction to a post
Reactions.addReaction = async function (pid, uid, emoji) {
    const reactionKey = `post:${pid}:reactions:${emoji}`;
    await db.sortedSetAdd(reactionKey, Date.now(), uid);
};

// Remove a reaction from a post
Reactions.removeReaction = async function (pid, uid, emoji) {
    const reactionKey = `post:${pid}:reactions:${emoji}`;
    await db.sortedSetRemove(reactionKey, uid);
};



'use strict';

const fs = require('fs');
const path = require('path');

let badWords = new Set();

// Load bad words from the text file
function loadBadWords() {
  const filePath = path.join(__dirname, 'bad-words.txt');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    badWords = new Set(data.split(/\r?\n/));
  } catch (err) {
    console.error('Error while reading bad words file:', err);
  }
}

loadBadWords();

// Hook for filtering posts
module.exports = {
  'filter:post.create': function (data, callback) {
    data.content = censorBadWords(data.content);
    callback(null, data);
  }
};

function censorBadWords(content) {
  const words = content.split(/\s+/);
  let censoredContent = '';

  for (const word of words) {
    if (badWords.has(word.toLowerCase())) {
      censoredContent += '**** ';
    } else {
      censoredContent += word + ' ';
    }
  }

  return censoredContent.trim();
}

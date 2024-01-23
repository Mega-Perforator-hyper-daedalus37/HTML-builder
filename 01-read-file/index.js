const fs = require('node:fs');

fs.createReadStream(__dirname + '/text.txt', 'utf8').on('data', (text) => {
  console.log(text);
});

const fs = require('node:fs');
const process = require('node:process');
const { stdin, stdout } = process;
const path = require('node:path');

const writeStream = fs.createWriteStream(
  path.join(__dirname, 'your-awesome-text.txt'),
);

stdout.write('Input your text: ');

stdin.on('data', (text) => {
  if (text.toString().trim() === 'exit') {
    console.log('see you space cowboy');
    process.exit();
  }
  stdout.write('Input more your text: ');
  writeStream.write(text);
});

process.on('SIGINT', () => {
  console.log('Bye bye');
  process.exit();
});

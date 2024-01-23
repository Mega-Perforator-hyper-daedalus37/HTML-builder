const fs = require('node:fs');
const path = require('node:path');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (_, files) => {
    files.forEach((file) => {
      fs.stat(path.join(__dirname, 'secret-folder', file.name), (_, stats) => {
        console.log(
          file.name.replace(/\./, ' - ') +
            ' - ' +
            (stats.size / 1024).toFixed(2) +
            'kb',
        );
      });
    });
  },
);

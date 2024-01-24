const fs = require('fs/promises');
const path = require('path');

async function copyFolder(src, dest) {
  try {
    await fs.mkdir(dest);
    const files = await fs.readdir(src);
    files.forEach(async (file) => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const isDirectory = (await fs.stat(srcPath)).isDirectory();

      if (isDirectory) {
        await copyFolder(srcPath, destPath);
      }
      await fs.copyFile(srcPath, destPath);
    });
  } catch {}
}

copyFolder('files', 'files-copy');

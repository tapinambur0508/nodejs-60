const fs = require("fs").promises;

// console.log(__dirname); // Work only in CommonJS modules
// console.log(__filename); // Work only in CommonJS modules

fs.readdir(__dirname)
  .then((files) => {
    const promises = files.map(async (filename) => {
      const stats = await fs.stat(filename);

      return {
        Name: filename,
        Size: stats.size,
        Date: stats.mtime,
      };
    });

    return Promise.all(promises);
  })
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

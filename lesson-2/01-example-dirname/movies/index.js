const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

async function readMovies() {
  const filePath = path.join(__dirname, "movies.txt");

  const extname = path.extname(filePath);
  const basename = path.basename(filePath, extname);

  const uniqFileName = `${basename}-${nanoid(8)}${extname}`;

  console.log(path.basename(filePath));
  console.log(path.extname(filePath));
  console.log(path.basename(filePath, path.extname(filePath)));

  console.log(uniqFileName);

  const data = await fs.readFile(filePath, "utf8");

  return data;
}

module.exports = { readMovies };

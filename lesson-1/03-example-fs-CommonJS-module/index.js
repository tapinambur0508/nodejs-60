// const fs = require("fs");
// const fs = require("fs").promises;
// const fsPromises = fs.promises;

const fs = require("fs/promises");

const filePath = "./public/file.txt";

// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data);

//   fs.writeFile('new-file.txt', data, (err) => {
//     if (err) throw err;
//   })
// });

// try {
//   const data = fs.readFileSync(filePath, "utf8");

//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

async function readFile(filePath) {
  const data = await fs.readFile(filePath, "utf8");

  return data;
}

async function writeFile(filePath, data) {
  const res = await fs.writeFile(filePath, data, "utf8");

  return res;
}

async function appendFile(filePath, data) {
  const res = await fs.appendFile(filePath, data, "utf8");

  return res;
}

readFile(filePath)
  .then((data) => writeFile("./public/new-file.txt", data.toUpperCase()))
  .then(() => appendFile("./public/new-file.txt", "Hello World!"))
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));

console.log("After");

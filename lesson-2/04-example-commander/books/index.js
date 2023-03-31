const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const booksFilePath = path.join(__dirname, "books.json");

async function readBooks() {
  const data = await fs.readFile(booksFilePath, "utf8");

  return JSON.parse(data);
}

function updateBooks(books) {
  return fs.writeFile(booksFilePath, JSON.stringify(books), "utf8");
}

function getAll() {
  return readBooks();
}

async function getById(id) {
  const books = await readBooks();

  const book = books.find((book) => book.id === id);

  return book;
}

async function addBook(book) {
  const books = await readBooks();

  const newBook = { ...book, id: nanoid(8) };

  books.push(newBook);

  await updateBooks(books);

  return newBook;
}

module.exports = {
  getAll,
  getById,
  addBook,
};

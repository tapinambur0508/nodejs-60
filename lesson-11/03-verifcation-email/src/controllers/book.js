const Book = require("../models/book");

async function getBooks(req, res, next) {
  const userId = req.user.id;

  try {
    const books = await Book.find({ userId });

    return res.json(books);
  } catch (error) {
    return next(error);
  }
}

async function createBook(req, res, next) {
  try {
    const book = {
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      userId: req.user.id,
    };

    const createBook = await Book.create(book);

    return res.status(201).json(createBook);
  } catch (error) {
    return next(error);
  }
}

async function deleteBook(req, res, next) {
  const book = await Book.findById(req.params.id);
  // const book = await Book.findOne({ _id: req.params.id });

  if (book === null) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (book.ownerId !== req.user.id) {
    return res.status(403).end();
    // return res.status(404).end();
  }

  await Book.findByIdAndDelete(req.params.id);
}

module.exports = {
  getBooks,
  createBook,
};

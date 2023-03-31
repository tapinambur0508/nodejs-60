const books = require("./books");

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getById":
      const book = await books.getById(id);
      console.log(book);
      break;
    case "addBook":
      const newBook = await books.addBook({ title, author });
      console.log(newBook);
      break;
    default:
      console.log("Unknown action");
  }
}

const actionIndex = process.argv.indexOf("--action");

console.log(process.argv);

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  const id = process.argv[actionIndex + 2];
  const title = process.argv[actionIndex + 3];
  const author = process.argv[actionIndex + 4];

  invokeAction({ action, id, title, author });
}

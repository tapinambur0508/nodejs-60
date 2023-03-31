const { program } = require("commander");

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

program
  .option("-a, --action <action>", "Action to perform")
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");

program.parse(process.argv);

const options = program.opts();

console.log(options);

invokeAction(options);

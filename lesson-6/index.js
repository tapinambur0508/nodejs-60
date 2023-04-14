require("dotenv").config();

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DB_URI);

  console.log("Connected to MongoDB");

  const bookSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
        match: /^[A-Z]{1,1}[a-zA-Z0-9\s]+$/,
      },
      genre: {
        type: String,
        required: true,
        enum: ["Fantasy", "Science Fiction"],
      },
      year: {
        type: Number,
        required: true,
      },
      verified: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  const Book = mongoose.model("books", bookSchema);

  // Create a new book
  const res = await Book.create({
    title: "Harry Potter and the Sorcerer's Stone",
    author: "John Doe",
    genre: "Fantasy",
    year: 2000,
  });
  console.log(res);

  // // Find all books
  // const res = await Book.find();
  // console.log(res);

  // // Find author books
  // const res = await Book.find({ author: { $ne: "Nicolas Bevacqua" }, year: { $gte: 1900, $lte: 2020 } });
  // console.log(res);

  // // Find book by id
  // const res = await Book.findOne({ author: "Nicolas Bevacqua" });
  // const res = await Book.findOne({ _id: "64398b0802439415763f391b" });
  // const res = await Book.findById("64398b0802439415763f391d");
  // console.log(res);

  // // Update book
  // const res = await Book.findOneAndUpdate({ _id: "64398b0802439415763f391b" }, { year: 2020 }, { new: true });
  // const res = await Book.findByIdAndUpdate("64398b0802439415763f391b", { genre: "education" }, { new: true });
  // console.log(res);

  // // Delete book
  // const res = await Book.findOneAndDelete({ _id: "64398b0802439415763f391b" });
  // const res = await Book.findByIdAndDelete("64398b0802439415763f391b");
  // console.log(res);

  // // Regular expression
  // const res = await Book.find({ title: { $regex: /Harry/, $options: "i" } });
  // console.log(res);
}

main().catch((err) => console.error(err));

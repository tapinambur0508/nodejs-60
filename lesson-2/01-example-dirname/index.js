const { readMovies } = require("./movies");

readMovies().then(console.log).catch(console.error);

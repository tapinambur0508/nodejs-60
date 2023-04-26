const app = require("./app");

require('./db');

const PORT = process.env.PORT || 9000;

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});

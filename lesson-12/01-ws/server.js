const dayjs = require("dayjs");
const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

const clients = [];

wss.on("connection", (socket) => {
  clients.push(socket);

  for (const client of clients) {
    if (client === socket) {
      client.send("Welcome to Chat");
    } else {
      client.send(
        `New user connected. ${dayjs().format("HH:mm:ss DD/MM/YYYY")}`
      );
    }
  }

  // prettier-ignore
  socket.on("message", (message) => {
    const data = JSON.parse(message.toString());

    for (const client of clients) {
      if (client === socket) {
        client.send(`You: ${data.message}. ${dayjs().format("HH:mm:ss DD/MM/YYYY")}`);
      } else {
        client.send(`${data.name}: ${data.message}. ${dayjs().format("HH:mm:ss DD/MM/YYYY")}`);
      }
    }
  });
});

console.log("Listening on port 8080");

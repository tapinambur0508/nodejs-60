const http = require("http");
const dayjs = require("dayjs");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (__, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.emit("chatMessage", "Welcome to Chat");
  socket.broadcast.emit(
    "chatMessage",
    `New user connected. ${dayjs().format("HH:mm:ss DD/MM/YYYY")}`
  );

  socket.on("chatMessage", (message) => {
    const data = JSON.parse(message);

    socket.emit(
      "chatMessage",
      `You: ${data.message}. ${dayjs().format("HH:mm:ss DD/MM/YYYY")}`
    );
    socket.broadcast.emit(
      "chatMessage",
      `${data.name}: ${data.message}. ${dayjs().format("HH:mm:ss DD/MM/YYYY")}`
    );
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

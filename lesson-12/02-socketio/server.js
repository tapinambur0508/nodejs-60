const http = require("http");
const dayjs = require("dayjs");
const { Server } = require("socket.io");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
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

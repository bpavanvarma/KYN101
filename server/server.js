const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = process.env.PORT || 80;
const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  console.log("New client connected" + socket.id);

  setInterval(() => {
    io.sockets.emit("time",new Date().toTimeString());
  }, 1000);


  socket.on("initial_data", () => {
      io.sockets.emit("get_data", "Socket working");

  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});


/*React front end*/
app.use(express.static("../build"));

server.listen(port, () => console.log(`Listening on port ${port}`));

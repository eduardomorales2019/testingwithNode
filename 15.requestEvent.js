// use a server as a event.

const http = require("http");

// USE EVENT EMITTER API
const server = http.createServer();

// EMITT REQUEST EVENT
// SUSCRIBE FOR IT, LISTEN OF IR, RESPOND TO IT

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(4230, console.log("listening in port 4230 !!! "));

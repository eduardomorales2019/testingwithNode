// event emitter is class with diferent instances !!
const eventEmitter = require("events");

// create a new  instance of the class
const customEmitter = new eventEmitter();

// just click on the new event, called response. , that have a console saying dara received
customEmitter.on("response", () => {
  console.log("data received");
});
customEmitter.on("response", (name, id) => {
  console.log(`some other logic  ${name}, ${id}`);
});

// finnaly emit the event !!! match the name of the event!!
customEmitter.emit("response", "Edu", 41);

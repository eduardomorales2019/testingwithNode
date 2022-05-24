// console.log("start 1ers task");
// setTimeout(() => {
// 	console.log("start second task ");
	
// }, 0);

// console.log("start 3erd task ");

//  ! Set interval..

// ! http  module. 


const http = require("http")


// always request first in call back !!
const server = http.createServer((req, res)=> {
	console.log("requesting event");
	res.end("hola mundo"); 

}); 

server.listen(5320, ()=> {
console.log("listening in 5320");
}); 
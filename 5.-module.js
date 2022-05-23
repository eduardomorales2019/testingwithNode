// io module!!  interacting  with opetative system!!!
const os = require("os")
const path = require("path")
// ___________________________________________________________________________________
// info about user 

const user = os.userInfo()
console.log(user );

// methof to return  the  system uptimed  in seconds. 

console.log(os.uptime()); // answer in seconds !! 

// these are builting modules !!!

const currentOperativesystem = {
	
	name: os.type(), 
	release: os.release(), 
	totalmemory: os.totalmem(), 
	freememory : os.freemem()
}

console.log(currentOperativesystem );

const http = require("http")

const server = http.createServer((req, res )=> {
	
if (req.url === "/"){
	res.end("Bienvenidos a la pagina principal")
}
if (req.url === "/about"){
res.end("bienvenido a cerca de nosotros ")
}
res.end(`<h1> ha entrado a una pagina secreta <h1/>`)
})

server.listen(2300, console.log("corriendo en puerto 2300 ")); 


// ______________

const _ =  require("lodash")
const item = [1, [2, [3, [4, [5]]]]]

const newitem = _.flatMapDeep(item)
console.log(newitem);
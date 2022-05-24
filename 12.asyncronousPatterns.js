const http =  require ("http")

const server = http.createServer((req, res)=> {
	if (req.url  ===  "/"){
		res.end("Your are in the Home Page")
	}
	if (req.url === "/about"){
		res.end("You are in the about page my mate !!!")
	} 
	res.end("you are in aweb place where you should not be looking")

})

server.listen(2000, ()=> {
	console.log("listening in port 2000 " );
})
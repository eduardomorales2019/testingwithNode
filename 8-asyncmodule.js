const {readFile, writeFile} = require("fs")

// async we privide a call back  when its done !!!  as event listenr with bottons 



readFile("content/first.txt", "utf8",(error, result)=> {
	if(error){
		console.log(error);
		return 
	}
	const first = result
	readFile("content/second.txt", "utf8", (err, result)=> {
if (err){
	console.log(err);
	return
}
 const second = result 
	})

	writeFile("content/result-async.txt", "hola mundo ",  (err, result)=> {
		if (err){
			console.log(err);
			return
		}
		console.log(result );

	})
})


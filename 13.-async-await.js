
// this is sync way
const {readFile , writeFile} = require("fs")

// readFile("content/first.txt", "utf8", (error, data)=> {
// if (error){
// 	console.log(error);
// }
// else {
// 	console.log(data  );
// }
// })

//  NOW WITH PROMESES. 

const readArchive =(path)=> {

	return new Promise((resolve, reject) => {
readFile(path, "utf8", (error, data ) => {
	if (error){
		reject(error)
	}else  {
		resolve(data , console.log("im data ")); 
	}
})
	})
}


const Pathy = "content/first.txt"

//  PROMISE WITH ASYNC, always with a try ans catch ! 

const starting =  async ()=> {
	try {
		
		const first =  await readArchive("content/first.txt"); 
		const second = await readArchive("content/second.txt"); 
console.log(first, second);
	} catch (error) {
		console.log(error);
	}

	

}

starting()


// PROMISE

// readArchive(Pathy).then((result)=> console.log(result)).catch(error => console.log(error)); 
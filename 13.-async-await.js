// this is sync way

//---- we can use (). primises to... enhance the power  from the  text code !!

const { readFile, writeFile } = require("fs").promises;

//  Use of util ------------  to   grab in memoty the promise and not write it down!!

const util = require("util");

// ------------------------
// const readFilePromise= util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// ------------------------

// READFILE SYNCRONOUS ---------------------------
// readFile("content/first.txt", "utf8", (error, data)=> {
// if (error){
// 	console.log(error);
// }
// else {
// 	console.log(data  );
// }
// })

// READFILE WITH ASYNCRONOUS PROMISES ------------

//  NOW WITH PROMESES.  this will e the wrapper function that is gonna be moved with util !!

// ----------------------------------------------------------------
// const readArchive =(path)=> {

// 	return new Promise((resolve, reject) => {
// readFile(path, "utf8", (error, data ) => {
// 	if (error){
// 		reject(error)
// 	}else  {
// 		resolve(data , console.log("im data "));
// 	}
// })
// 	})
// }

// ----------------------------------------------------------------
// const Pathy = "content/first.txt"

//  PROMISE WITH ASYNC, always with a try ans catch !

const starting = async () => {
  try {
    const first = await readFile("content/first.txt", "utf8");
    const second = await readFile("content/second.txt", "utf8");

    // -- NOW WE USE THE WRITE FILE AS COUNTINOUS  FROM THE PAST PROMISE STATEMENT!

    await writeFile("content/resultingAwait.txt", " this is really working ", {
      flag: "a",
    });

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

starting();

// PROMISE

// readArchive(Pathy).then((result)=> console.log(result)).catch(error => console.log(error));

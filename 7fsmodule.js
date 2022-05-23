
// sync way 


const  {readFileSync, writeFileSync}= require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
console.log(first, second);

console.log( "==============================="); 

// 3erd. parameter!!  use the flag to rewrite !! 
 writeFileSync("./content/result-sync.txt", `here is the result of : ${first } and ${second}`, {flag: "a"})

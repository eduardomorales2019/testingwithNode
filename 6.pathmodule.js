console.log("___________________________________________________________________________________"); 

console.log(path.sep);
// path file !!!
const filePath = path.join("./content/subfolder/text.txt")
console.log(filePath);

const base = path.basename(filePath)
console.log(base, "iam base ");

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt")
console.log(absolute, "soy absolute ");
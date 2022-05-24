const { writeFileSync } = require("fs");

for (let x = 0; x < 1000; x++) {
  writeFileSync("./content/big.txt", `hola mundo ${x}\n`, { flag: "a" });
}

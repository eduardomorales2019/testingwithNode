const { createReadStream } = require("fs");

// we can set the  utf8 or the  HIGHWATERMARK

// const stream = createReadStream("./content/big.txt", { encoding: "utf8" });
const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });

stream.on("data", (result) => {
  console.log(result);
});

/// to check errors ..-----

stream.on("error", (err) => console.log(err));

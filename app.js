const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("CHANGES MADE again will take some time");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const path = require("path");
const app = express();
const port = 1337;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

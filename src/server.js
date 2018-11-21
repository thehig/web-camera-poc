const express = require("express");
const bodyParser = require('body-parser')
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/api/images", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

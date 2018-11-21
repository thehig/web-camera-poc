const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(
  bodyParser.json({
    limit: "50mb"
  })
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/api/images", (req, res) => {
  console.log(req.body);
  res.end("Image uploaded");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

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

function humanFileSize(bytes, si) {
  // https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  var units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + " " + units[u];
}

app.post("/api/images", (req, res) => {
  const data = req.body.value;
  const size = humanFileSize(data.length); // Note: This assumes UTF8, i.e. 8 bits per character
  res.end("Image uploaded ~" + size);
  console.log("=== SNAPSHOT ===");
  console.log(size, data);
  console.log("================");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

const express = require("express");
const app = express();

//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//joining path of directory
const directoryPath = path.join(__dirname, "public/portfolioImages");
console.log(directoryPath);

//passsing directoryPath and callback function
app.get("/images", (req, res) => {
  console.log("reading all images", directoryPath);
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    res.send(files);
  });
});

app.get("/images/:id", (req, res) => {
  console.log("requested image");
  fs.readFile(path.join(directoryPath, req.params.id), (err, file) => {
    res.send(file);
  });
});

app.listen(3001);

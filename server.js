const express = require("express");
const path  = require('path')

const app = express();

app.use(express.json());

const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "./build");

app.use(express.static(buildPath))

app.get("/", function(req, res){
  res.sendFile(
    path.join(__dirname, "./build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
});

const port = 5000;

app.listen(port, () => {
  console.log("application started in port:", port);
});

const express = require("express");

const app = express();
const cors = require("cors");
let port = 5000;

app.use(cors());

const rappers = {
  "chance the rapper": {
    "age": 29,
    "birthName": "Sheyaa Bin Abraham-Joseph",
    "birthLocation": "London, England",
  },
  "21 savage": {
    "age": 29,
    "birthName": "Chancelor Bennett",
    "birthLocation": "Chicago, Illinois",
  },
  "dylan": {
    "age": 29,
    "birthName": "unknown",
    "birthLocation": "unknown",
  },
};

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  let rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["dylan"]);
  }
  // res.json(rappers);
});

app.listen(process.env.PORT || PORT, function () {
  console.log(`this server is running on port ${port}`);
});

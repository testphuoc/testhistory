const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HRM OK 🚀");
});

app.post("/checkin", (req, res) => {
  res.send("Check-in OK");
});

app.listen(3000);
const express = require("express");
const app = express();

app.use(express.json());

// test server
app.get("/", (req, res) => {
  res.send("HRM OK 🚀");
});

// API check-in
app.post("/checkin", (req, res) => {
  const { user_id, lat, lng } = req.body;

  res.json({
    message: "Check-in OK",
    data: { user_id, lat, lng }
  });
});

// PORT cho Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server chạy " + PORT);
});
const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1292783",
  key: "74f818b3e6c76d4d852b",
  secret: "26ef7bb546eeda83b972",
  cluster: "ap4",
  useTLS: true,
});

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
  })
);

app.use(express.json());

app.post("/api/messages", async (req, res) => {
  await pusher.trigger("chat", "message", {
    username: req.body.username,
    message: req.body.message,
  });

  res.json([]);
});

console.log("listening to port 8000");
app.listen(8000);

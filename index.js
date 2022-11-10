import express from "express";
import cors from "cors";

const users = [];
const tweets = [];

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello Server"));

app.post("/sign-up", (req, res) => {
  users.push({ ...req.body });

  res.send("OK");
});
app.post("/tweets", (req, res) => {
  tweets.push({
    avatar: users.find((user) => user.username === req.body.username).avatar,
    ...req.body,
  });

  res.send("OK");
});

app.get("/tweets", (req, res) => res.send(tweets.slice(0, 9)));

app.listen(5000);

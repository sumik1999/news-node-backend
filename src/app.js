import express from "express";
import postRouter from "./controllers/post.js";

const app = express();

app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/post", postRouter);
export default app;

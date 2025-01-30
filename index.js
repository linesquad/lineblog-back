import express from "express";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import commentRouter from "./routes/comment.js";
import webhookRouter from "./routes/webhook.js";
import connectDB from "./lib/connectDB.js";

const app = express();

app.use("/webhooks", webhookRouter);
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Internal server error",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(5000, () => {
  connectDB();
  console.log(`Server is running on port 5000`);
});

import express from "express";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import commentRouter from "./routes/comment.js";
import connectDB from "./lib/connectDB.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});

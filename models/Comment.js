import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

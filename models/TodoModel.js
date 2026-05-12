import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  status: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

export default TodoModel;

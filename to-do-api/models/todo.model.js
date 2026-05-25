const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
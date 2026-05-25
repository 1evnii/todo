const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
            minLength: 3,
            maxLength: 50
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: [true, "Please enter your email"]
        },
        password: {
            type: String,
            required: [true, "Please enter user password"],
            minLength: 3
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
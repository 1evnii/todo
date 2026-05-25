const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/user.route.js");
const todoRoute = require("./routes/todo.route.js");
const refreshRoute = require("./routes/refresh.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use("/api/users", userRoute);
app.use("/api/todos", todoRoute);
app.use("/api/refresh", refreshRoute);

mongoose.connect("mongodb://host.docker.internal:27017/todo")
.then(() => {
    console.log("Connected to database!");
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Nasłuchuje port ${port}`));
})
.catch(() => {
    console.log("Connection failed!");
});
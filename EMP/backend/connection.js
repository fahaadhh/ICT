const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://fd4bizness:KL57ak0047@fd.cluat.mongodb.net/?retryWrites=true&w=majority&appName=fd")

    .then(() => {
        console.log("Connected to MongoDB");
    })
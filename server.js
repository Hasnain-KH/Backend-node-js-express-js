for (var hasnain = 0; hasnain <= 5; hasnain++) {
    console.log("hi kaise ho " + hasnain);
}

// const express = require("express");

import express from "express";

const app = express();
const Port = 5000;

const user = [
    {
        name: "hasnain",
        id: 1,
        email: "hasnain@gmail.com"

    },

    {
        name: "ayan",
        id: 2,
        email: "ayan@gmail.com"

    }
]

app.get('/', (req, res) => {
    res.send("Welcome to my Backend Application");
})

app.get('/user', (req, res) => {
    res.send(user);
})




app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
})
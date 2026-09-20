for (var hasnain = 0; hasnain <= 5; hasnain++) {
    console.log("hi kaise ho " + hasnain);
}

// const express = require("express");

import express from "express";

const app = express();
const Port = 5000;

app.get('/', (req, res) => {
    res.send("HI Hasnain How are you");
})


app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
})
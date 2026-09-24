for (var hasnain = 0; hasnain <= 5; hasnain++) {
    console.log("hi kaise ho " + hasnain);
}

// const express = require("express");

import express from "express";

const app = express();

app.use(express.json());

const Port = 5000;

const users = [
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
//aak request ke andar two response nhi bhejsakte//
//rest api // 
app.get('/', (req, res) => {
    res.send("Welcome to my Application");
})


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/myusers', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    users.push(newUser);

    console.log("User Created Successfully");


    res.send({
        message: "User created Successfully",
        user: newUser
    })

});



app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
})
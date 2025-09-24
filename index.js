require('dotenv').config();

const express = require("express")
const server = express()

const DB_PASSWORD = process.env.DB_PASSWORD;
const API_KEY = process.env.API_KEY;

server.use(express.json());

server.get("/login", (req,res) => {
    res.send("This is GET for facebook")
})

server.post("/contact", (req,res) => {
    res.send("This is POST for facebook")
})

server.patch("/update", (req,res) => {
    res.send("This is PATCH for facebook")
})

server.delete("/account", (req,res) => {
    res.send("This is DELETE for facebook")
})

server.listen(3002, () => {
    console.log("Facebook - Listening to port 3002")
})
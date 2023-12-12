import dotenv from 'dotenv'
import express from "express";
import connectDB from "./db/index.js"

dotenv.config({
    path: "./.env"
})


const app = express()

connectDB()

app.get('/', (req, res) => res.send("Hii"))


app.listen(process.env.PORT || 3000)
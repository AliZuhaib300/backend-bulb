import express from "express";
import route from "./routes/route.js";
import cors from "cors";
import connectDb from "./db/db.js";
import bodyParser from "body-parser";

const app = express()

app.use(cors());
app.use(bodyParser.json())


app.use('/postwatts', route)

connectDb();

app.listen(7000, () => {
    console.log("Server is connected")
})
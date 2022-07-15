import watts from "../model/schema.js";
import express from "express";

const route = express.Router();

route.post("/", async (req, res) => {
    const { logArray } = req.body;
    const watt = new watts({
        watts: logArray
    })
    const data = await watt.save()
    res.send(data)
    res.end()
})

route.get("/", async (req, res) => {
    const data = await watts.find({})
    res.send(data)
    res.end()
})

export default route;
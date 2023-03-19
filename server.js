const express = require('express');
const MetaTx = require("./models/metaTxModel");
const connectMongo = require("./utils/connectMongodb")
const cors = require("cors")

const app = express();

// Using Middleware to understand json
app.use(express.json());

app.use(cors());

// Ask to listed the port
app.listen(3002, () => {
    console.log("Node API app is running on port 3002");
});

connectMongo();

app.post("/metaTx", async (req, res) => {
    try {
        const metaTx = await MetaTx.create(req.body);
        res.status(200).json(metaTx);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
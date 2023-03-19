const mongoose = require("mongoose");
require("dotenv").config();

const connectMongo = async () => {

    try {
        await mongoose
            .connect(
                `mongodb+srv://nufail:${process.env.MONGODB_PSWD}@cluster0.ztntp3d.mongodb.net/metaTx?retryWrites=true&w=majority`
            );

        console.log("Connected to Mongo DB");
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectMongo;
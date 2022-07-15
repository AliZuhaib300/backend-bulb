import mongoose from "mongoose";

const connectDb = () => {
    mongoose.connect("mongodb://localhost/DBData",)
        .then(() => console.log("DB is connected"))
        .catch((error) => console.log("something is wrong", error))
}

export default connectDb;
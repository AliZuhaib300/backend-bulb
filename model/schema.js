import mongoose from "mongoose";

const wattsSchema = mongoose.Schema({
    watts: [Number]
});

const watts = mongoose.model("watts", wattsSchema)

export default watts;
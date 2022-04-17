import mongoose from "mongoose";

const TravelPreventionSchema = mongoose.Schema({
    result: [],
    date: {
        type: Date,
        default: Date.now(),
    },
});

const TravelPreventionData = mongoose.model("TravelPreventionData", TravelPreventionSchema);
export default TravelPreventionData;

import mongoose from "mongoose";

const TravelSchema = mongoose.Schema({
  result: [],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const TravelData = mongoose.model("TravelData", TravelSchema);
export default TravelData;

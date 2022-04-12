import mongoose from "mongoose";

const WorldNcovSchema = mongoose.Schema({
  retdata: [],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const WorldNcovData = mongoose.model("WorldNcovData", WorldNcovSchema);
export default WorldNcovData;

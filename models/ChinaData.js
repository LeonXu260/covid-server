import mongoose from "mongoose";

const ChinaNcovSchema = mongoose.Schema({
  retdata: [],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ChinaNcovData = mongoose.model("ChinaNcovData", ChinaNcovSchema);
export default ChinaNcovData;

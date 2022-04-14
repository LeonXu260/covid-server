import mongoose from "mongoose";

const ncovImageSchema = mongoose.Schema({
  result: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ncovImageData = mongoose.model("ncovImageData", ncovImageSchema);
export default ncovImageData;

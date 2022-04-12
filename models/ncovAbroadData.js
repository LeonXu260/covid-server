import mongoose from "mongoose";

const ncovAbroadSchema = mongoose.Schema({
  newslist: [{}],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ncovAbroadData = mongoose.model("ncovAbroadData", ncovAbroadSchema);
export default ncovAbroadData;

import mongoose from "mongoose";

const ncovChinaSchema = mongoose.Schema({
  newslist: [
    {
      news: { type: Array },
      desc: { type: Array },
      riskarea: { type: Array },
    },
  ],
  date: {
      type: Date,
      default: Date.now();
  }
});

const ncovChinaData = mongoose.model('ncovChinaData', ncovChinaSchema);
export default ncovChinaData;

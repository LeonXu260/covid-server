import mongoose from "mongoose";

const ChinaNcovCitiesSchema = mongoose.Schema({
  retdata: [],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ChinaNcovCitiesData = mongoose.model(
  "ChinaNcovCitiesData",
  ChinaNcovCitiesSchema
);
export default ChinaNcovCitiesData;

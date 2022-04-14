import express from "express";

// Import files
import {
  getChinaData,
  getAbroadData,
  ChinaData,
  getImage,
  WorldData,
  TravelDataCity,
} from "../controller/ncov.js";

const router = express.Router();

router.get("/", getChinaData);
router.get("/abroad", getAbroadData);
router.get("/china", ChinaData);
router.get("/world", WorldData);
router.get("/image", getImage);
router.get("/travel", TravelDataCity);

export default router;

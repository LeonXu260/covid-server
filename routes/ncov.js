import express from "express";

// Import files
import {
  getChinaData,
  getAbroadData,
  ChinaData,
  getImage,
  WorldData,
  TravelDataCity,
  TravelPolicy
} from "../controller/ncov.js";

const router = express.Router();

router.get("/", getChinaData);
router.get("/abroad", getAbroadData);
router.get("/china", ChinaData);
router.get("/world", WorldData);
router.get("/image", getImage);
router.get("/travel", TravelDataCity);
router.get('/travelprevention', TravelPolicy)

export default router;

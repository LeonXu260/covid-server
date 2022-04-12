import express from "express";

// Import files
import {
  getChinaData,
  getAbroadData,
  ChinaData,
  WorldData,
} from "../controller/ncov.js";

const router = express.Router();

router.get("/", getChinaData);
router.get("/abroad", getAbroadData);
router.get("/china", ChinaData);
router.get("/world", WorldData);

export default router;

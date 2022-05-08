import express from "express";

// Import files
import {
  fetchAllChinaData,
  fetchAbroadData,
  fetchChinaData,
  fetchImageData,
  fetchWorldData,
} from "../controller/ncovFetchData.js";

const router = express.Router();

router.get("/", fetchAllChinaData);
router.get("/abroad", fetchAbroadData);
router.get("/china", fetchChinaData);
router.get("/world", fetchWorldData);
router.get("/image", fetchImageData);

export default router;

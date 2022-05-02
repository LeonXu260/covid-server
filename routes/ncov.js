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

import {
  fetchAllChinaData,
  fetchChinaData,
  fetchImageData,
  fetchIndividualChinaData,
  fetchWorldData
} from '../controller/ncovFetchData.js'

const router = express.Router();

router.get("/", getChinaData);
router.get("/abroad", getAbroadData);
router.get("/china", ChinaData);
router.get("/world", WorldData);
router.get("/image", getImage);
router.get("/travel", TravelDataCity);
router.get('/travelprevention', TravelPolicy)

router.get('/fetch', fetchAllChinaData);
router.get('/fetch/one', fetchIndividualChinaData)
router.get('/fetch/chart', fetchImageData);
router.get('/fetch/china', fetchChinaData);
router.get('/fetch/world', fetchWorldData);

export default router;

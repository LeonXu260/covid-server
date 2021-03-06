import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import schedule from "node-schedule";

dotenv.config({
  path: path.dirname("../.env"),
});

// 导入models文件
import ncovChinaData from "../models/ncovChinaData.js";
import ncovAbroadData from "../models/ncovAbroadData.js";
import ChinaNcovData from "../models/ChinaData.js";
import WorldNcovData from "../models/WorldData.js";
import ImageData from "../models/ImageData.js";
import TravelData from "../models/TravelData.js";
import TravelPreventionData from "../models/TravelPreventionData.js";

// Get China Data method
export const fetchChinaData = schedule.scheduleJob("0 19 * * *", () => {
  // 导入环境变量
  const { tianapiKey } = process.env;
  const ncovChinaUrl = `https://api.tianapi.com/ncov/index?key=${tianapiKey}`;
  axios.get(ncovChinaUrl).then((result) => {
    const { data } = result;
    let parseData = data;
    // 写入获取数据到数据库
    ncovChinaData.findOneAndUpdate({parseData}, {parseData});
  });
});

// Get Abroad Data method
export const fetchAbroadData = schedule.scheduleJob("5 19 * * *", () => {
  // 导入环境变量
  const { tianapiKey } = process.env;
  const ncovAbroadUrl = `https://api.tianapi.com/ncovabroad/index?key=${tianapiKey}`;
  axios.get(ncovAbroadUrl).then((result) => {
    const { data } = result;
    let parseData = data;
    let id = "627729c653361519aefa00c7";
    // 写入获取数据到数据库
    ncovAbroadData.findByIdAndUpdate(id, parseData);
  });
});

// Get China Data method
export const ChinaData = schedule.scheduleJob("10 19 * * *", () => {
  const { wapiAppid, wapiSign } = process.env;
  const ChinaNcovUrl = `https://yupn.api.storeapi.net/api/94/219?format=json&appid=${wapiAppid}&sign=${wapiSign}`;
  axios.get(ChinaNcovUrl).then((result) => {
    const { data } = result;
    let parseData = data;
    let id = "62772a0111c3c8ff365c5c65";
    // 写入获取数据到数据库
    ChinaNcovData.findByIdAndUpdate(id, parseData);
  });
});

// Get World Data method
export const WorldData = schedule.scheduleJob("15 19 * * *", () => {
  const { wapiAppid, wapiSign } = process.env;
  const worldNcovUrl = `https://yupn.api.storeapi.net/api/94/220?format=json&appid=${wapiAppid}&sign=${wapiSign}`;
  axios.get(worldNcovUrl).then((result) => {
    const { data } = result;
    let parseData = data;
    let id = "62772ab38e2bb6fb9795e6c1";
    // 写入获取数据到数据库
    WorldNcovData.findByIdAndUpdate(id, parseData);
  });
});

// Get Image Data method
export const getImage = async (req, res) => {
  try {
    axios.get("http://iwenwiki.com/wapicovid19/ncovimg.php").then((result) => {
      const { data } = result;
      let parseData = data;
      res.status(200).json(data);
      // 写入获取数据到数据库
      ImageData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Get Travel Data method
export const TravelDataCity = async (req, res) => {
  const { juhe } = process.env;
  const travelUrl = `https://apis.juhe.cn/springTravel/citys?key=${juhe}`;
  try {
    axios.get(travelUrl).then((result) => {
      const { data } = result;
      let parseData = data;
      res.status(200).json(data);
      // 写入获取数据到数据库
      TravelData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Get Travel Prevention Policies
export const TravelPolicy = async (req, res) => {
  const { juhe } = process.env;
  const travelPreventionUrl = `https://apis.juhe.cn/springTravel/query?key=${juhe}&from=10191&to=10349`;
  try {
    axios.get(travelPreventionUrl).then((result) => {
      const { data } = result;
      let parseData = data;
      // 写入获取数据到数据库
      TravelPreventionData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

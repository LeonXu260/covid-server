import axios from "axios";
import dotenv from "dotenv";
import path from "path";

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

// Get China Data method
export const getChinaData = async (req, res) => {
  // 导入环境变量
  const { tianapiKey } = process.env;
  const ncovChinaUrl = `https://api.tianapi.com/ncov/index?key=${tianapiKey}`;
  try {
    axios.get(ncovChinaUrl).then((result) => {
      const { data } = result;
      let parseData = data;
      res.status(200).json(data);
      // 写入获取数据到数据库
      ncovChinaData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Get Abroad Data method
export const getAbroadData = async (req, res) => {
  // 导入环境变量
  const { tianapiKey } = process.env;
  const ncovAbroadUrl = `http://api.tianapi.com/ncovabroad/index?key=${tianapiKey}`;
  try {
    axios.get(ncovAbroadUrl).then((result) => {
      const { data } = result;
      let parseData = data;
      res.status(200).json(data);
      // 写入获取数据到数据库
      ncovAbroadData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Get China Data method
export const ChinaData = async (req, res) => {
  const { wapiAppid, wapiSign } = process.env;
  const ChinaNcovUrl = `https://yupn.api.storeapi.net/api/94/219?format=json&appid=${wapiAppid}&sign=${wapiSign}`;
  try {
    axios.get(ChinaNcovUrl).then((result) => {
      const { data } = result;
      let parseData = data;
      res.status(200).json(data);
      // 写入获取数据到数据库
      ChinaNcovData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Get World Data method
export const WorldData = async (req, res) => {
  const { wapiAppid, wapiSign } = process.env;
  const worldNcovUrl = `https://yupn.api.storeapi.net/api/94/220?format=json&appid=${wapiAppid}&sign=${wapiSign}`;
  try {
    axios.get(worldNcovUrl).then((result) => {
      const { data } = result;
      let parseData = data;
      res.status(200).json(data);
      // 写入获取数据到数据库
      WorldNcovData.insertMany(parseData);
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

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

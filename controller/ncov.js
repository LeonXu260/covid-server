import axios from "axios";
import dotenv from "dotenv";
import path, { parse } from "path";

dotenv.config({
  path: path.dirname("../.env"),
});

// 导入models文件
import ncovChinaData from "../models/ncovChinaData.js";
import ncovAbroadData from "../models/ncovAbroadData.js";
import ChinaNcovData from "../models/ChinaData.js";
import WorldNcovData from "../models/WorldData.js";

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

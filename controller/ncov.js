import axios from "axios";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.dirname("../.env"),
});

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
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

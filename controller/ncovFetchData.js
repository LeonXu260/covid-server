// 导入models文件
import ncovChinaData from "../models/ncovChinaData.js";
import ChinaNcovData from '../models/ChinaData.js';
import WorldNcovData from "../models/WorldData.js";

// Fetch China Data method
export const fetchAllChinaData = (req, res) => {
    ncovChinaData.find().then(result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({ message: error });
    });
};

// Fetch individual data method
export const fetchIndividualChinaData = (req, res) => {
    ncovChinaData.findById('626ef3242d047c1843308d5c').then(result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({message: error});
    })
}

// Fetch China Data from Wapi
export const fetchChinaData = async (req, res) => {
    ChinaNcovData.find().then(result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({message: error});
    })
};

// Fetch World Dta from Wapi
export const fetchWorldData = (req, res) => {
    WorldNcovData.find().then(result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({ message: error });
    });
};
// 导入models文件
import ncovChinaData from "../models/ncovChinaData.js";
import ChinaNcovData from '../models/ChinaData.js';
import WorldNcovData from "../models/WorldData.js";
import ImageData from "../models/ImageData.js";
import ncovAbroadData from "../models/ncovAbroadData.js";

// Fetch China Data method
export const fetchAllChinaData = (req, res) => {
    ncovChinaData.find().then(result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({ message: error });
    });
};

// Fetch Abroad Data method
export const fetchAbroadData = (req, res) => {
    ncovAbroadData.find().then (result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({message: error})
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

// Fetch Image Data
export const fetchImageData = (req, res) => {
    ImageData.findById('625791053ac996de2bdbb3ba').then(result => {
        res.send(result);
    }).catch(error => {
        res.status(404).json({ message: error });
    })
}
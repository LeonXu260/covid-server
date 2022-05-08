"use strict";

// Import packges
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";

// Import files
import ncov from './controller/ncov.js';

// Initialize dotenv
dotenv.config();

// Import file
import ncovRoute from "./routes/ncov.js";

const app = express();

// Use CORS
app.use(cors());

// Use middleware to connect
app.use("/api", ncovRoute);

// Create a public directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./public")));

// Setup body parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Use ncov
ncov.use('fetchChinaData');

// Connecting to MongoDB
mongoose
  .connect(process.env.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT))
  .catch((error) => console.log(error));

// // Allow us to change the port easily by setting an environment variable
const PORT = process.env.PORT || 8000;
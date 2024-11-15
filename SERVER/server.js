import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
app.use(cors());


dotenv.config();  // This will load variables from your .env file

// server.js
const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
console.log(process.env.MONGO_URI); // Log the URI to check if it's loaded correctly

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

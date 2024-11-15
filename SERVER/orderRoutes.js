import express from 'express';
import Order from '../models/Order.js';

// routes/orders.js
const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Error creating order" });
  }
});

module.exports = router;

const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();

// GET, get all orders
router.get('/', (req, res) => {
  Order.find({}, (err, data) => {
    res.json(data);
  });
});


// POST new order
router.post('/', (req, res) => {

  const order = req.body.order;
  const orderData = new Order({
    fuel: {
      name: order.fuel.name,
      price: order.fuel.price,
      unit: order.fuel.unit,
      src: order.fuel.src,
    },
    addressDelivery: {
      city: order.addressDelivery.city,
      postalCode: order.addressDelivery.postalCode,
      street: order.addressDelivery.street,
      buildingNumber: order.addressDelivery.buildingNumber,
    },
    phoneNumber: order.phoneNumber,
    email: order.email,
    count: order.count,
    description: order.description,
    dateOfOrder: this.default
  });

  orderData.save((err) => {
    console.log(err);
  });
});

module.exports = router;

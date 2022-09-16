var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    fuel: {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        required: true
      },
      src: {
        type: String,
        required: true
      }
    },
    addressDelivery: {
      city: {
        type: String,
        required: true
      },
      postalCode: {
        type: String,
        required: true
      },
      street: {
        type: String,
        required: true
      },
      buildingNumber: {
        type: String,
        required: true
      },
    },
    phoneNumber: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    count: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },

    dateOfOrder: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = mongoose.model('Order', OrderSchema);

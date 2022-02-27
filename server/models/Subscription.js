const { Schema } = require("mongoose");

const subscriptionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  tiered: {
    type: Boolean,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  cardAlias: {
    type: String,
    required: false,
  },
  // This is meant to be the number of months for each cycle. So '1' would be monthly, '12' would be yearly. Whether subscriptions have other options than yearly or monthly, I don't know. I figured this would give us flexibility, though.
  billingCycle: {
    type: Number,
    required: true,
  },
});

module.exports = subscriptionSchema;

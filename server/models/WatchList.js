const { Schema } = require("mongoose");

const watchListSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  tmdbId: {
    type: String,
    required: true,
  },
});

module.exports = watchListSchema;

const { Schema } = require("mongoose");

const watchListSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  tmdbId: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  providers: {
    type: [String],
    required: false,
  },
});

module.exports = watchListSchema;

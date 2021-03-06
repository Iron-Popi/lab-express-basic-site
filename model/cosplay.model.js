const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cosplaySchema = new Schema({
    name: String,
    universe: String,
    // image: String,
    inProgress: {
      type: String,
      enum: ["yes", "no"]
    },
  });

const cosplayModel = mongoose.model("cosplays", cosplaySchema);
module.exports = cosplayModel;

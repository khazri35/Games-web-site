const mongoose = require("mongoose");
const { Schema } = mongoose;

const panelSchema = new Schema({
  title: String,
  //game: [{ type: Schema.Types.ObjectId, ref: "Game" }],

  quantity: Number,

  price: Number,
});

module.exports = Panel = mongoose.model("panel", panelSchema);

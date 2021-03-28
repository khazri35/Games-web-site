const mongoose = require("mongoose")
const schema= mongoose.Schema;

const gameSchema = new schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    
    },
    url: String,

    price: String
});

module.exports= Game=mongoose.model("game", gameSchema);
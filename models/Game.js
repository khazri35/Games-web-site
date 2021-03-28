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
    demo: String,

    price: Number
});

module.exports= Game=mongoose.model("game", gameSchema);
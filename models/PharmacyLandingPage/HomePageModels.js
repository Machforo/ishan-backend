const mongoose = require("mongoose");

const statsBarSchema = new mongoose.Schema({
    name:{type:String}, 
    logo:{type:String},
});

const statsBarModel = mongoose.model("statsBarModel",statsBarSchema);

module.exports= {
    statsBarSchema
}
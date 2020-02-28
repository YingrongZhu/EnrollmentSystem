const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    firstname: {type:String,required:true},
    lastname: {type: String, required: true},
    nickname:{ type: String, required: true},
    birthdate:{type: Date },
    gender:{ type: String, required: true},
    homeaddress:{ type: String, required: true},
    contactnumber:{ type: String, required: true},
    other:{type:Map,of:String}
}, 
{
    timestamps: true,
});

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;
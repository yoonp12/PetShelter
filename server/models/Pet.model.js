const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema ({
    petName: {
        type: String,
        minlength: [3, "Pet Name must be at least 3 characters long"],
        required: [true, "All pets have names"],
        unique: [true]
    },
    petType: {
        type: String,
        minlength: [3, "All Pet Types are longer than 3 characters"],
        required: [true, "Pet Type must be provided"]
    },
    petDescription: {
        type: String,
        minlength: [3, "Must provide a description of at least 3 characters"],
        required: [true, "Must provide some sort of description"]
    },
    petSkill_1: {
        type: String
    },
    petSkill_2: {
        type: String
    },
    petSkill_3: {
        type: String
    },
    likes: {
        type: Number
    }
})
PetSchema.plugin(uniqueValidator, { message: "That name already exists, please choose a different name" });
module.exports.Pet = mongoose.model('Pet', PetSchema);
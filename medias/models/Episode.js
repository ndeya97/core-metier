const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    duree: {
        type: Number,
        require: true
    },
    numero: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
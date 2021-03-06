const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    serieID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Serie',
        required: false
    },
    saison: {
        type: Number,
        require: false
    },
    url: {
        type: String,
        require: false
    },
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
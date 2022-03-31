const mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const episodeSchema = require('./Episode');
const Schema = mongoose.Schema;

//Media model
const mediaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

//Film model
const filmSchema = extendSchema(mediaSchema, {
    duree: {
        type: Number,
        required: true
    }
});

/*
//Serie model
const serieSchema = mediaSchema.extend({
    episodes: [episodeSchema]
});
*/

const Media = mongoose.model('Media', mediaSchema);
const Film = mongoose.model('Film', filmSchema );
//const Serie = mongoose.model('Serie', serieSchema);


module.exports = Media;
module.exports = Film;
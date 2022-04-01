const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const extendSchema = require('mongoose-extend-schema');
// const episodeSchema = require('./Episode').schema;

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

/*
//Film model
const filmSchema = extendSchema(mediaSchema, {
    duree: {
        type: Number,
        required: true
    }
});
*/

/*
//Serie model
const serieSchema = extendSchema(mediaSchema,{
    episodes: [episodeSchema]
    
});
*/

const Media = mongoose.model('Media', mediaSchema);
// const Film = mongoose.model('Film', filmSchema );
// const Serie = mongoose.model('Serie', serieSchema);


module.exports = Media;
// module.exports = Film;
// module.exports = Serie;
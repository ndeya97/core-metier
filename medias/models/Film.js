const mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const mediaSchema = require('../models/Media');
//Film model
const filmSchema = extendSchema(mediaSchema, {
    ...mediaSchema.schema.obj,
    duree: {
        type: Number,
        required: true
    }
});

const Film = mongoose.model('Film', filmSchema );

module.exports = Film;
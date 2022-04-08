const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const extendSchema = require('mongoose-extend-schema');
const episodeSchema = require('./Episode').schema;
const mediaSchema = require('../models/Media');

//Serie model
const serieSchema = extendSchema(mediaSchema,{
    ...mediaSchema.schema.obj,
    episodes:  [{type: Schema.Types.ObjectId, ref:'Episode'}]
});

const Serie = mongoose.model('Serie', serieSchema);

module.exports = Serie;
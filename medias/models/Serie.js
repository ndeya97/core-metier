const mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const episodeSchema = require('./Episode').schema;
const mediaSchema = require('../models/Media');

//Serie model
const serieSchema = extendSchema(mediaSchema,{
    ...mediaSchema.schema.obj,
    episodes: [{ 
            episodeID: {
            type : mongoose.SchemaTypes.Object
            }
        }]
    
});

console.log(episodeSchema.obj.id);

const Serie = mongoose.model('Serie', serieSchema);

module.exports = Serie;
const mongoose = require('mongoose');
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
    },
});


const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;

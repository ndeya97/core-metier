const Media = require('../models/Media');

const media_index = (req, res) => {
    Media.find().then((medias) => {
        res.json(medias)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

const media_create_post = (req,res) => {
    var newMedia = {
        title: req.body.title,
        url: req.body.url,
        categorie: req.body.categorie,
        description: req.body.description
    }
    console.log(req.body)
    // Create a new Media
    var media = new Media(newMedia)
    media.save().then(() => {
        console.log("New media created!")
    }).catch(err => {
       if(err){
           throw err;
       } 
    })
    res.send("A new media created with success");
}

module.exports = {
    media_index,
    media_create_post
}
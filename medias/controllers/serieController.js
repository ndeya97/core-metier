const mongoose = require('mongoose');
const Episode = require('../models/Episode');
const Serie = require('../models/Serie');

const serie_index = (req, res) => {
    Serie.find().then((series) => {
        res.json(series)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

const serie_create_post = (req,res) => {
    var newSerie = {
        title: req.body.title,
        url: req.body.url,
        categorie: req.body.categorie,
        description: req.body.description,
    }

    var serie =  new Serie(newSerie)
    serie.save().then(() => {
        console.log("New serie created!")
    }).catch(err => {
       if(err){
           throw err;
       } 
    })
    console.log(serie);
    res.send("A new serie created with success ");
}


const serie_details_get = (req, res) => {
    Serie.findById(req.params.id).then((serie) => {
        if(serie){
            res.json(serie)
        }else{
            res.sendStatus(400);
        }

    }).catch(err => {
        if(err){
            throw err;
        }
    })
}



const serie_update = (req,res) => {
    var updatedSerie = {
        title: req.body.title,
        url: req.body.url,
        categorie: req.body.categorie,
        description: req.body.description,
        episodes: mongoose.Types.ObjectId(req.body.episodeID)
    }

    console.log(updatedSerie.episodes);
    Serie.updateOne({'_id': req.params.id},
                    {
                        $push: {
                            episodes: updatedSerie.episodes,
                        }
                    },
    function(err) {
        if (err) {
            res.status(500).send()
            console.log(err)
        }
        else res.status(200).send()
        })
    
}

module.exports = {
    serie_index,
    serie_create_post,
    serie_update,
    serie_details_get,
}
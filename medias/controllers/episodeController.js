const mongoose = require('mongoose');
const Episode = require('../models/Episode');
const axios = require('axios');

const episode_index = (req, res) => {
    Episode.find().then((episodes) => {
        res.json(episodes)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

const episode_create_post = (req,res) => {
    var newEpisode = {
        serieID: mongoose.Types.ObjectId(req.body.serieID),
        duree: req.body.duree,
        numero: req.body.numero,
        description: req.body.description,
    }
    console.log(req.body)
    // Create a new Episode
    var episode = new Episode(newEpisode)
    
    episode.save().then(() => {
        console.log("New episode created!")
    }).catch(err => {
       if(err){
           throw err;
       } 
    })
    res.send("A new episode created with success");
}

const episode_details = (req,res) => {
    Episode.findById(req.params.id).then((episode) => {
        if(episode){
            axios.get("http://localhost:4545/medias/series/"+serie.serieID).then((response) => {
                console.log(response)
                var episodeObject = {serieTitle: response.data.title, numero: '', description: ''}
                episodeObject.description = episode.description;
                episodeObject.numero = episode.numero;
                res.json(episodeObject)
            })

        }else{
            res.send("Invalid Episode")
        }
    })
}

module.exports = {
    episode_index,
    episode_create_post,
    episode_details
}
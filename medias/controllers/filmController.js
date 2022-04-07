const Film = require('../models/Film');
const mediaSchema = require('../models/Media')
const film_index = (req, res) => {
    Film.find().then((films) => {
        res.json(films)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

const film_create_post = (req,res) => {
    var newFilm = {
        title: req.body.title,
        url: req.body.url,
        categorie: req.body.categorie,
        description: req.body.description,
        duree: req.body.duree
    }
    console.log(req.body)
    console.log(mediaSchema);
    // Create a new Film
    var film = new Film(newFilm)

    film.save().then(() => {
        console.log("New film created!")
    }).catch(err => {
       if(err){
           throw err;
       } 
    })
    res.send("A new film created with success");
}


const film_details_get = (req, res) => {
    Film.findById(req.params.id).then((film) => {
        if(film){
            res.json(film)
        }else{
            res.sendStatus(400);
        }

    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

module.exports = {
    film_index,
    film_create_post,
    film_details_get
}
// const mongoose = require('mongoose');
// const Saison = require('../models/Saison');

// const saison_index = (req, res) => {
//     Saison.find().then((saisons) => {
//         res.json(saisons)
//     }).catch(err => {
//         if(err){
//             throw err;
//         }
//     })
// }

// const saison_create_post = (req,res) => {
//     var newSaison = {
//         serieID: mongoose.Types.ObjectId(req.body.serieID),
//         numero: req.body.numero,
//         episodes: mongoose.Types.ObjectId(req.body.episodeID)
//     }

//     var saison = new Serie(newSaison)
//     saison.save().then(() => {
//         console.log("New saison created!")
//     }).catch(err => {
//        if(err){
//            throw err;
//        } 
//     })
//     console.log(saison);
//     res.send("A new saison created with success");
// }


// const saison_details_get = (req, res) => {
//     Saison.findById(req.params.id).then((saison) => {
//         if(saison){
//             res.json(saison)
//         }else{
//             res.sendStatus(400);
//         }

//     }).catch(err => {
//         if(err){
//             throw err;
//         }
//     })
// }






// module.exports = {
//     saison_index,
//     saison_create_post,
//     saison_details_get
// }
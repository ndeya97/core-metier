// Load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require("cors");


const mediaRoutes = require('./routes/mediaRoutes');
const filmRoutes = require('./routes/filmRoutes');
const serieRoutes = require('./routes/serieRoutes');
const episodeRoutes = require('./routes/episodeRoutes');

app.use(cors());

app.use(bodyParser.json());


// Connect
mongoose.connect("mongodb://nadiop97:Ynover_97@cluster0-shard-00-00.wq4ds.mongodb.net:27017,cluster0-shard-00-01.wq4ds.mongodb.net:27017,cluster0-shard-00-02.wq4ds.mongodb.net:27017/mediasservices?ssl=true&replicaSet=atlas-oh9j0s-shard-0&authSource=admin&retryWrites=true&w=majority", () => {
    console.log("Database is connected - mediasservice !");
});



app.get('/', (req, res) => {
    res.send("This is our main endpoind for media !")
    // res.redirect('/medias');
})  



//Media routes
app.use('/medias', mediaRoutes);
//Film routes
app.use('/films', filmRoutes);
//Serie routes
app.use('/series', serieRoutes);
//Episode routes
app.use('/episodes', episodeRoutes);

app.listen(4545, () => {
console.log("Up and running at 4545! This is our Media service");
})
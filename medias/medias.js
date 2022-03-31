// Load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mediaRoutes = require('./routes/mediaRoutes');
const filmRoutes = require('./routes/filmRoutes');
app.use(bodyParser.json());


// Load mongoose
const mongoose = require('mongoose');


//Connect
mongoose.connect("mongodb://nadiop97:Ynover_97@cluster0-shard-00-00.wq4ds.mongodb.net:27017,cluster0-shard-00-01.wq4ds.mongodb.net:27017,cluster0-shard-00-02.wq4ds.mongodb.net:27017/mediasservice?ssl=true&replicaSet=atlas-oh9j0s-shard-0&authSource=admin&retryWrites=true&w=majority", () => {
    console.log("Database is connected - mediasservice !");
});

app.get('/', (req, res) => {
    res.send("This is our main endpoind for media !")
// res.redirect('/books');
})  


//Media routes
app.use('/medias', mediaRoutes);
//Film routes
app.use('/medias/films', filmRoutes);

app.listen(4545, () => {
console.log("Up and running at 4545! This is our Media service");
})
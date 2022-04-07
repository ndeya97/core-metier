const express = require('express');
const serieController = require('../controllers/serieController');

const router = express.Router();

router.get("/", serieController.serie_index);
router.post("/", serieController.serie_create_post);
router.get('/:id', serieController.serie_details_get);
// router.get('/:title', serieController.serie_populate_episode);
module.exports = router;
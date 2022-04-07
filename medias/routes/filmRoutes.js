const express = require('express');
const filmController = require('../controllers/filmController');

const router = express.Router();

router.get("/", filmController.film_index);
router.post("/", filmController.film_create_post);
router.get('/:id', filmController.film_details_get);

module.exports = router;
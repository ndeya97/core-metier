const express = require('express');
const episodeController = require('../controllers/episodeController');

const router = express.Router();

router.get("/", episodeController.episode_index);
router.post("/", episodeController.episode_create_post);

module.exports = router;
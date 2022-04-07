const express = require('express');
const episodeController = require('../controllers/episodeController');

const router = express.Router();

router.get("/", episodeController.episode_index);
router.post("/", episodeController.episode_create_post);
router.get("/:id", episodeController.episode_details);

module.exports = router;
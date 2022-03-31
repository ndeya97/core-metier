const express = require('express');
const mediaController = require('../controllers/mediaController');

const router = express.Router();

router.get("/", mediaController.media_index);
router.post("/", mediaController.media_create_post);

module.exports = router;
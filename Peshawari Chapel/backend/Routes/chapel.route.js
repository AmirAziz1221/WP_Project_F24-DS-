const express = require('express');
const router = express.Router();

const createChapel = require('../Controllers/controllers.chapel');

// POST route to create a new chapel
router.post('/create', createChapel);

module.exports = router;

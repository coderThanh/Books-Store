const express = require('express');
const router = express.Router();

const controller = require('../controllers/login.controllers');

router.get('/user', controller.get );
router.post('/user', controller.post );


module.exports = router;


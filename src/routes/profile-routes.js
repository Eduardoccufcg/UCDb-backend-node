'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/profile-controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/search/',controller.searchBySubstring)
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteById);


module.exports = router;
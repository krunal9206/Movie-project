const express = require('express');
const router = express.Router();
const movie = require('../services/movie');

router.get('/', async function (req, res, next) {
    try {
        res.json(await movie.getMultiple());
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await movie.getSingle(req.params.id));
    } catch (err) {
        next(err);
    }
});

module.exports = router;
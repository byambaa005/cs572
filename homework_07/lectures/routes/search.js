const express = require('express');
const router = express.Router();

let db = require('../db');

router.get('/:q', async function (req, res, next) {
    if (req.params.q === null || req.params.q === 'undefined' || req.params.q === "") {
        return res.status(500).json("No search query provided");
    }

    const collection = db.get().collection('lectures');
    const response = await collection.find({'lecture': req.params.q}).toArray();

    res.status(200).json(response);
});

module.exports = router;

const express = require('express');
const router = express.Router();

let db = require('../db');

router.get('/', async function (req, res, next) {
    const collection = db.get().collection('lectures');
    const response = await collection.find({}).toArray;

    res.status(200).json(response);
});

router.post('/', (req, res) => {
    const collection = db.get().collection("lectures");
    collection.insertOne(req.body);
    res.end();
});

router.put('/:id', (req, res) => {
    const collection = db.get().collection("lectures");
    //collection.save(req.body);
    collection.updateOne({"_id": new ObjectID(req.params.id)}, {$set: req.body});
    collection.find({}).toArray().then(result => res.json(result));
});

router.delete('/:id', (req, res) => {
    const collection = db.get().collection("lectures");
    collection.deleteOne({"_id": new ObjectID((req.params.id))}, function () {
        res.status(200).json("Successfully deleted");
    });
    res.end();
});

module.exports = router;

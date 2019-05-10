const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/state/:state', async function(req, res, next) {
    const collection = db.get().collection('zips');
    const response = await collection.aggregate([
        {$match: {state: req.params.state.toUpperCase()}},
        {$group: {_id: {city: "$city", state: "$state"}, population: {$sum: "$pop"}, zip_codes: {$addToSet: "$_id"}}},
        {$project: {_id: 0, city: "$_id.city", state: "$_id.state", population: 1, zip_codes: 1}}
    ]).toArray();

    res.status(200).json(response);
});

router.get('/population', async function(req, res, next) {

    const popSize = req.query.size;

    const collection = db.get().collection('zips');
    const response = await collection.aggregate([
        {$match: {pop: {$lt : parseInt(popSize)}}},
        // {$group: {_id: {city: "$city", state: "$state"}, population: {$sum: "$pop"}, zip_codes: {$addToSet: "$_id"}}},
        // {$project: {_id: 0, city: "$_id.city", state: "$_id.state", population: 1, zip_codes: 1}},
        {$sort: {pop: -1}},
        {$limit: 100}
    ]).toArray();

    res.status(200).json(response);
});

router.get('/least', async function(req, res, next) {

    const collection = db.get().collection('zips');
    const response = await collection.aggregate([
        {$group: {_id: {city: "$city", state: "$state"}, population: {$sum: "$pop"}}},
        {$sort: {"_id.state": 1, population: 1}},
        {$group: {_id: "$_id.state", city: {$first: "$_id.city"}, population: {$first: "$population"}}},
        {$sort: {"_id": 1}}
    ]).toArray();

    res.status(200).json(response);
});

module.exports = router;

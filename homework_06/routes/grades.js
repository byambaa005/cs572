let express = require('express');
let router = express.Router();
const R = require('ramda');

let gradeDataRaw = [
    {id: 1, name: "Asaad Saad", course: "CS572", grade: 95},
    {id: 2, name: "Byambadorj Dulamsuren", course: "CS572", grade: 97},
    {id: 3, name: "Demo Duka", course: "CS572", grade: 93}
];

let gradeDataJSON = JSON.stringify(gradeDataRaw);

const eqByUserId = (id)=>  R.propEq('id', id);
const filterUserId = (id, data) => R.filter(eqByUserId(id), data);

router.get('/', function (req, res, next) {
    res.status(200).json(gradeDataJSON);
});

router.get('/:id', function (req, res, next) {
    res.status(200).json(filterUserId(parseInt(req.params.id), gradeDataRaw)[0]);
});

router.post('/', function (req, res, next) {
    gradeDataRaw.push(req.body);
    res.status(200).send("Successfully saved following object" + req.body);
});

module.exports = router;
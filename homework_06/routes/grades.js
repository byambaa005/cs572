let express = require('express');
let router = express.Router();
const R = require('ramda');
const jsonParser = express.json();

let gradeDataRaw = [
    {id: 1, name: "Asaad Saad", course: "CS572", grade: 95},
    {id: 2, name: "Byambadorj Dulamsuren", course: "CS572", grade: 97},
    {id: 3, name: "Demo Duka", course: "CS572", grade: 93}
];


const eqByUserId = (id)=>  R.propEq('id', id);
const filterUserId = (id, data) => R.filter(eqByUserId(id), data);

router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.status(200).json(gradeDataRaw);
});

router.get('/:id', function (req, res, next) {
    res.status(200).json(filterUserId(parseInt(req.params.id), gradeDataRaw)[0]);
});

router.post('/', jsonParser, function (req, res, next) {
    gradeDataRaw.push(req.body);
    res.status(200).send("Successfully saved following object");
});

router.delete('/:id', function (req, res, next) {
    let curUser = filterUserId(parseInt(req.params.id), gradeDataRaw)[0];
    if (gradeDataRaw.indexOf(curUser) > -1) {
        gradeDataRaw.splice(gradeDataRaw.indexOf(curUser), 1);
    }
    res.status(200).json("Successfully removed following object");
});

module.exports = router;

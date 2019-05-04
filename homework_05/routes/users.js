let express = require('express');
let router = express.Router();
let axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  (async function() {
    try {
      const response = await axios.get("https://randomuser.me/api/?result=10");
      // console.log(response);
      res.set();
      res.links({
        next: 'https://randomuser.me/api/?result=11',
        last: 'https://randomuser.me/api/?result=9'
      });
      res.send(response.data);
      res.end();
    } catch (err) {
      console.error(err);
      res.writeHead(500);
      res.end();
    }
  })();
});


module.exports = router;

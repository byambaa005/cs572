let express = require('express');
let port = 3000;
let app = express();



app.listen(port, function () {
    console.log(`Port is ${port}`)
});
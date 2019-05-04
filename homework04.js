const os = require('os');

const from = require('rxjs').from;

const checkSystem = function () {
    return new Promise(function (success, error) {
        "use strict";
        if (os.cpus().length >= 2 && os.totalmem >= 4 * 1024 * 1024 * 1024)
            success('System is checked successfully');
        else if (os.cpus().length < 2)
            error('Processor is not supported');
        else if (os.totalmem < 4 * 1024 * 1024 * 1024)
            error('This app needs at least 4 GB of RAM');
    })
};

from(checkSystem()).subscribe(
    (d) => console.log(d),
    (err) => console.error(err),
    () => console.log('completed')
);

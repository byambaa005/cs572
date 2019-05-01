'use strict';
(function() {
    Array.prototype.even = function () {
        let origArr = this;
        setTimeout(function () {
            const evenArr = origArr.filter((value) => value%2 === 0);
            console.log(evenArr);
        }, 0);
    };

    Array.prototype.odd = function () {
        let origArr = this;
        setTimeout(function () {
            const oddArr = origArr.filter((value) => value%2 !== 0);
            console.log(oddArr);
        }, 0);
    };

    console.log('start');
    [1, 2, 3, 4, 5].even();
    [1, 2, 3, 4, 5].odd();
    console.log('end');
})();

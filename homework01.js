'use strict';
(function () {
    function ex01() {

        String.prototype.filterWords = function (strArr) {

            const origArr = this.split(" ");
            const starStr = "***";

            origArr.forEach(function (value, index) {
                if (strArr.includes(value)) {
                    origArr[index] = starStr;
                }
            });

            return origArr.join(' ');

        };
        console.log("This house is nice!".filterWords(['house', 'nice!']))

    }

    function ex02() {
        String.prototype.filterWords = function (strArr) {

            const origArr = this.split(" ");
            const starStr = "***";

            origArr.forEach(function (value, index) {
                if (strArr.includes(value)) {
                    origArr[index] = starStr;
                }
            });
            return new Promise(function (resolve, reject) {
                if (strArr.includes(value)) {
                    resolve();
                } else {
                    reject();
                }
            }).then(function (result) {
                console.log("Promise returned: " + result);
            }).catch(function (err) {
                console.log(err);
            });
        };

    }
    ex01();
    // ex02();
    // ex03();

}());
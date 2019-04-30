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

    function ex02(str) {
        String.prototype.filterWords = function (strArr) {

            const origArr = this.split(" ");
            const starStr = "***";


            return new Promise(function (resolve, reject) {
                origArr.forEach(function(value, index) {
                    if (str.split(" ").includes(value)) {
                        origArr[index] = starStr;
                        resolve(origArr.join(' '));
                    } else {
                        reject(str);
                    }
                });
            }).then(function (result) {
                console.log("Promise returned: " + result);
            }).catch(function (err) {
                console.log(err);
            });

        };
        console.log("This house is nice!".filterWords(['house', 'nice!']));

    }

    function isWeekend () {

    }

    ex01();
    ex02("This house is nice!");
    // ex03();

}());

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

            let origArr = this.split(" ");
            const starStr = "***";

            origArr = origArr.map((value, index) => {
                new Promise(function (resolve, reject) {
                    const arrIncluded = strArr.includes(value);
                    if (arrIncluded) {
                        origArr[index] = starStr;
                        resolve(origArr.join(' '));
                    } else {
                        reject();
                    }
                });

            }).then(data => {return data})
                    .catch((err)=>{console.log(err)});

        };
        console.log("This house is nice!".filterWords(['house', 'nice!']))
    }

    function ex03() {

    }
    // ex01();
    ex02();
    // ex03();

}());
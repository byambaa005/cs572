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
                if(strArr.includes(value)) {
                    origArr[index] = starStr
                }
                console.log(origArr);
            });

            // return new Promise(function (resolve, reject) {
            //         resolve(newArr);
            // }).then(function (result) {
            //     console.log("Promise returned: " + result);
            // }).catch(function (err) {
            //     console.log(err);
            // });
        };
        console.log("This house is nice!".filterWords(['house', 'nice!']))
    }
    // ex01();
    ex02();
    // ex03();

}());
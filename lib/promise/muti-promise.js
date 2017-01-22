'use strict';

var req = function req() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve('a');
        }, 1000);
    });
};
req().then(function (rst) {
    console.log(rst);
    var req1 = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            return resolve({ tag: 'tag1', rst: 'rst1' });
        }, 1000);
    });
    var req2 = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            return resolve({ tag: 'tag2', rst: 'rst2' });
        }, 1000);
    });
    if (rst == 'a') {
        return req1;
    } else if (rst == 'b') {
        return req2;
    } else if (rst == 'c') {
        return Promise.all([req1, req2]);
    }
}).then(function (rst) {
    if (rst instanceof Array) {
        var rst1 = rst[0];
        var rst2 = rst[1];
        console.log(rst1);
        console.log(rst2);
    } else if (rst.tag == 'tag1') {
        console.log(rst.rst);
    } else if (rst.tag == 'tag2') {
        console.log(rst.rst);
    }
});
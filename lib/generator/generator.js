"use strict";

var _whatwgFetch = require("whatwg-fetch");

var _whatwgFetch2 = _interopRequireDefault(_whatwgFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* http://exploringjs.com/es6/ch_generators.html */
/* basic */
// const genFunc = function*() {
//     console.log('First');
//     yield;
//     console.log('Second');
// };

// let rst;
// const fn = genFunc();
// rst = fn.next();
// rst = fn.next();


/* 22.1.3 Use case: implementing iterables */
// function* objectEntries(obj) {
//     const propKeys = Reflect.ownKeys(obj);
//     for (const propKey of propKeys) {
//         yield [propKey, obj[propKey]];
//     }
// }
// const jane = { first: 'Jane', last: 'Doe' };
// for (const [ key, value ] of objectEntries(jane)) {
//     console.log(key, value);
// }


/* 22.1.4 Use case: simpler asynchronous code */
function fetchJson(url) {
    return (0, _whatwgFetch2.default)(url).then(function (res) {
        return res.text();
    }).then(function (text) {
        return JSON.parse(text);
    }).catch(function (err) {
        return console.log("Error: " + err.stack);
    });
}
var url = "data.json";
fetchJson(url).then(function (data) {
    return console.log(data);
});
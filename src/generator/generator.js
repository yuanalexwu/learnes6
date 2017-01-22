import log, { logWarn } from '../util/log';


let run; // this will call for each ch

/* http://exploringjs.com/es6/ch_generators.html */


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
// promise
// function fetchJson(url) {
//     return fetch(url)
//     .then(res => res.text())
//     .then(text => JSON.parse(text))
//     .catch(err => console.log(`Error: ${err.stack}`))
// }

// async await
// async function fetchJson(url) {
//     try {
//         const res = await fetch(url);
//         let text = await res.text();
//         return JSON.parse(text);
//     } catch(err) {
//         console.log(`Error: ${err.stack}`);
//     }
// }
// run =  function() {
//     const url = "/data.json";
//     fetchJson(url).then(data => console.log(data));
// };

// 22.2 What are generators?
// basic
// const genFunc = function*() {
//     console.log('First');
//     yield;
//     console.log('Second');
// };
// run = function() {
//     const fn = genFunc();
//     console.log(fn.next());
//     console.log(fn.next());
// };

// test
// const genFunc = function*() {
//     yield '111';
//     yield '222';
//     return 'result';
// };
// run = function() {
//     const [a, b, c] = genFunc();
//     console.log(a, b, c);
//     logWarn('------我是分割线-------');
//     const fn = genFunc();
//     console.log(fn.next());
//     console.log(fn.next());
//     console.log(fn.next());
// };

/* 22.3.3 Throwing an exception from a generator */
// function* genFunc() {
//     yield '111';
//     throw new Error('Problem!');
// }
// run = function() {
//     const fn = genFunc();
//     console.log(fn.next());
//     console.log(fn.next());
//     console.log(fn.next());
// };


/* Recursion via yield* */
// function* foo() {
//     yield 'a';
//     yield 'b';
// }
// function* bar() {
//     yield 'x';
//     yield* foo();
//     yield* [1, 2, 3];
//     yield 'y';
// }
// run = function() {
//     for (const val of bar()) {
//         console.log(val);
//     }
// }


/* 22.3.6.1 yield* considers end-of-iteration values */
function* generateWithReturn() {
    yield 'a';
    yield 'b';
    return 'result';
}
function* logReturn() {
    const result = yield* generateWithReturn;
    console.log(result);
}
run = function() {
    for (const val of logReturn()) {

    }
}

export default function test() {
    run();
};

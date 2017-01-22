'use strict';

// const DELAY_IN_SECOND = 5000;


// function timeout(ms, promiseRequest) {
// 	return new Promise((resolve, reject) => {
// 		promiseRequest.then(resolve);
// 		setTimeout(() => reject(`your request is timeout in ${ms /1000} seconds`), ms);
// 	});
// }

// const request = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('request success');
// 	}, 4000);
// });

// timeout(DELAY_IN_SECOND, request).then(rst => {
// 	console.log(rst);
// }).catch(err => {
// 	console.log(err);
// });

Promise.prototype.finally = function (callback) {
  var P = this.constructor;
  // We don’t invoke the callback in here,
  // because we want then() to handle its exceptions
  return this.then(
  // Callback fulfills => continue with receiver’s fulfillment or rejection
  // Callback rejects => pass on that rejection (then() has no 2nd parameter!)
  function (value) {
    return P.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return P.resolve(callback()).then(function () {
      throw reason;
    });
  });
};

var a = Promise.resolve('aaa');
a.then(function (rst) {
  return Promise.resolve(rst);
}).then(function (rst2) {
  console.log(rst2);
  throw new Error('bad things happend');
}).catch(function (err) {
  console.log(err);
}).finally(function () {
  console.log('finally');
});
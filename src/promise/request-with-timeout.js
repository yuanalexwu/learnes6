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
    const P = this.constructor;
    // We don’t invoke the callback in here,
    // because we want then() to handle its exceptions
    return this.then(
        // Callback fulfills => continue with receiver’s fulfillment or rejection
        // Callback rejects => pass on that rejection (then() has no 2nd parameter!)
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

const a = Promise.resolve('aaa');
a.then((rst) => {
	return Promise.resolve(rst);
}).then((rst2) => {
	console.log(rst2);
	throw new Error('bad things happend');
}).catch(err => {
	console.log(err);
}).finally(() => {
	console.log('finally');
});


let DELAY_IN_SECOND = 2000;


function delay(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve(delay), delay);
	});
}

delay(DELAY_IN_SECOND).then((delay) => {
	console.log(`trigger after ${delay}`);
});
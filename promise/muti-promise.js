var req = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('a');
        }, 1000);
    });
};
req().then((rst) => {
    console.log(rst);
    const req1 = new Promise((resolve, reject) => setTimeout(() => {
            return resolve({tag: 'tag1', rst: 'rst1'});
    }, 1000));
    const req2 = new Promise((resolve, reject) => setTimeout(() => {
            return resolve({tag: 'tag2', rst: 'rst2'});
    }, 1000));
    if (rst == 'a') {
        return req1;
    } else if (rst == 'b') {
        return req2;
    } else if (rst == 'c') {
        return Promise.all([req1, req2]);
    }
}).then((rst) => {
    if (rst instanceof Array) {
        const rst1 = rst[0];
        const rst2 = rst[1];
        console.log(rst1);
        console.log(rst2);
    } else if (rst.tag == 'tag1') {
        console.log(rst.rst);
    } else if (rst.tag == 'tag2') {
        console.log(rst.rst);
    }
});
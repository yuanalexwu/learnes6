function log(msg = '', color = '#000000') {
    console.log(`%c${msg}`, `color: ${color}`);
}


export function logWarn(msg = '') {
    const color = 'red';
    log(msg, color);
}


export default log;
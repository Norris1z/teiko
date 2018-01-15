function randomString(n=7){
    return Math.random().toString(36).substr(2, n);
}

module.exports = randomString;
// allows to pass n value of args
const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));

//////

const sum1 = (function() {
    return function sum1(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum1(1, 2, 3, 5, 6, 7));


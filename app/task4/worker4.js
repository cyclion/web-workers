onmessage = function (event) {
    var n = event.data;
    generateFibocciSeries(n);
    postMessage(results);
};

var results = [];

function calculateFibonacciValue(n) {
    var s = 0;

    if (n === 0) {
        return s;
    }
    if (n === 1) {
        s += 1;
        return s;
    }
    else {
        return calculateFibonacciValue(n - 1) + calculateFibonacciValue(n - 2);
    }
}

function generateFibocciSeries(n) {
    var i;

    results.length = 0;
    for (i = 0; i <= n - 1; i++) {
        results.push(calculateFibonacciValue(i));
    }
}
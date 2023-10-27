function mathCalculations(a, b) {
    let summa = a + b;
    let vahe = a - b;
    let jagatis = Math.floor(a / b);
    let korrutis = a * b;

    return { summa, vahe, jagatis, korrutis };
}

module.exports = mathCalculations;
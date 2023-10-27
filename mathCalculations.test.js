const mathCalculations = require('./mathCalculations');

test('calculates addition correctly', () => {
    const tulemus = mathCalculations(10, 5);
    expect(tulemus.summa).toBe(15);
});

test('calculates subtraction correctly', () => {
    const tulemus = mathCalculations(10, 5);
    expect(tulemus.vahe).toBe(5);
});

test('calculates division correctly', () => {
    const tulemus = mathCalculations(10, 5);
    expect(tulemus.jagatis).toBe(2);
});

test('calculates multiplication correctly', () => {
    const tulemus = mathCalculations(10, 5);
    expect(tulemus.korrutis).toBe(50);
});
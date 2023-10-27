const calc = require('./mathCalculations');

test('calculates area of square correctly', () => {
    const tulemus = calc.areaSquare(10);
    expect(tulemus.squareArea).toBe(100);
});

test('calculates area of triangle correctly', () => {
    const tulemus = calc.areaTriangle(10, 5);
    expect(tulemus.Area).toBe(25);
});

test('calculates area of rectangle correctly', () => {
    const tulemus = calc.areaRectangle(10, 5);
    expect(tulemus.rectangleArea).toBe(50);
});


test('calculates area of circle correctly', () => {
    const tulemus = calc.areaCircle(10);
    expect(tulemus.circleArea).toBe(314);
});
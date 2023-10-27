// calculate the area of square
function areaSquare(a) {
    let squareArea = a * a;
    return { squareArea } 
}  

// calculate the area of triangle
function areaTriangle(a, h){
    let Area = a * h / 2
    return { Area } 
} 

// calculate the area of rectangle
function areaRectangle(a, b) {
    let rectangleArea = a * b;
    return { rectangleArea }  
}

// calculate the area of circle
function areaCircle(r) {
    let circleArea =  Math.round(Math.PI * r * r, 2);
    return { circleArea }  
}

exports.areaSquare = areaSquare;
exports.areaTriangle = areaTriangle;
exports.areaRectangle = areaRectangle;
exports.areaCircle = areaCircle;

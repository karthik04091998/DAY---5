
class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getcolor(){
        return this.color;
    }
    setcolour(color){
        this.color = color;
    }
    tostring(){
        return `Radius : ${this.radius} Color : ${this.color}`;
    }
    getArea() {
        return (2 * (Math.PI) * this.radius);
    }
    getCircumference(){
        return (2 * this.radius);
    }

}

let circle1 = new Circle();
console.log(circle1.tostring());

//radius
let circle2 = new Circle(4.5);
console.log(circle2.tostring());

//new radius
let circle3 = new Circle(4.5, 'yellow');
circle3.setRadius(6.45);
console.log("The new radius which i set is :",circle3.getRadius());

//new color
circle3.setcolour("Blue");
console.log("The new colour which i set is :" ,circle3.getcolor());

//tostring
console.log(circle3.tostring());

//Area
console.log("Area of a circle :",circle3.getArea());

//Circumference
console.log("Perimeter of a circle :",circle3.getCircumference());




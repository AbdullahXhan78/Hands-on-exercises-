var pi = 3.142;
var radius = 4;
var l = 6;
var b = 8;
var Area = "Circle";
switch (Area) {
    case "Circle":
        var Area_of_circle = pi * (radius * radius);
        console.log("Area of Circle is: ", Area_of_circle);
        break;
    case "Square":
        var Area_of_Square = l * l;
        console.log("Area of Square is: ", Area_of_Square);
        break;
    case "Rectangle":
        var Area_of_rectangle = l * b;
        console.log("Area of Rectangle is: ", Area_of_rectangle);
        break;
    default:
        console.log("Enter right command");
}

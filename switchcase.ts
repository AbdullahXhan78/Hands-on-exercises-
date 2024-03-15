let pi = 3.142;
let radius = 4;
let l = 6;
let b = 8;

let Area = "Circle";
switch (Area){
    case "Circle":
        let Area_of_circle = pi * (radius * radius);
        console.log("Area of Circle is: ",Area_of_circle);
        break;
    case "Square":
        let Area_of_Square =   l * l;
        console.log("Area of Square is: ",Area_of_Square);
        break;
    case "Rectangle":
        let Area_of_rectangle = l * b;
        console.log("Area of Rectangle is: ",Area_of_rectangle);
        break;
    default:
        console.log("Enter right command");
}
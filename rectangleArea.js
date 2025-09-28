// Print the rectangle area and perimeter , 
// pass the length and breadth as arguments in command line
function area(length, breadth) {
    return length * breadth;
}
function perimeter(length, breadth) {
    return 2 * (length + breadth);
}
let length = parseFloat(process.argv[2]);
let breadth = parseFloat(process.argv[3]);
if(isNaN(length) && isNaN(breadth)) {
    console.log("Invalid length or breadth");
} else {
    console.log("Area of rectangle is : ", area(length, breadth));
    console.log("Perimeter of rectangle is : ", perimeter(length, breadth));
}
// Dynamic import
async function loadModule() {
    const math = await import('./math.js');
    console.log("Dynamic import");
    console.log("Addition of 5 and 3 is ", math.add(5, 3));
    console.log(`Subtraction of 10 and 3 is `, math.subtract(10, 3));
}
loadModule();
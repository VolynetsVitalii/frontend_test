// Declare a function
function createArray(N) {
    let arrNumbers = [];
    console.log(N);
    for (let i = 1; i <= N; i++) {
        console.log(i);
        arrNumbers.push(i);
    }
    return arrNumbers;
}
// Exporting a Function
module.exports = createArray;
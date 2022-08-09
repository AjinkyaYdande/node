const common = require("./common.js");
// console.log("--- Main file");
// console.log(common, "-- Common file");


let array = [0, 2, 22, 5, 52, 5, 0, 100];
let element = 5
let result = array.filter((item) => {
    return (
        item === element
    )
})

console.log(array.indexOf(element) + 1, "position");
console.log(result, "filtered result");
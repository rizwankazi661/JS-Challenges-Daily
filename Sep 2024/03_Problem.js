// What is function expression ?

const square = function (num) {
    return num * num;
}

square(2);

// First Class function

function one(fn) {
    console.log("Square is: ", fn(5));
}

one(square);

// IIFE

(function two() {
    console.log("Print 1");
})();
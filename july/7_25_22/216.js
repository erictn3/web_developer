// a method is a function that has been placed as a property on an object
// every method is a funciton but not every function is a method
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;

    },
    cube(num) {
        return num ** 3;
    }
}

// every methods are simply functions added as properties on objects so we access them
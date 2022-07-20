function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function multiply(x, y) {
    if (typeof x === 'number' || typeof y === 'number') {
        return x * y;
    }
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true
    }
    return false
}

function lastElement(myArray) {
    if (myArray.length > 0) {
        return myArray[myArray.length - 1];
    }
    return null;
}
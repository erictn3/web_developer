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

function capitalize(str) {
    let firstIndex = str.substring(0, 1)
    let restOfWord = str.substring(1)
    return firstIndex.toUpperCase() + restOfWord;
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum;
}


const weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}

const returnDay = (day) => {
    if (day < 1 || day > 7) {
        return null;
    }
    return (weekDays[day])

}
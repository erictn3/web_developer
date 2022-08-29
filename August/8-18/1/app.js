const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('green', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('purple', 1000)
    return 'all done'
}

rainbow().then(() => console.log("End of rainbow"));

async function printRainbow() {
    await rainbow();
    console.log('end of rainbow');
}

printRainbow();
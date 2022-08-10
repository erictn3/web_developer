const input = document.querySelector('input');
const h1 = document.querySelector('h1')

// input.addEventListener('change', function () {
//     console.log('aasdfdf');
// });

input.addEventListener('input', function (e) {
    console.log(e)
    h1.innerText = input.value
});
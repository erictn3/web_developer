// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const productInput = document.querySelector('#product');
const qtyInput = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = productInput.value;
    const qtyNumber = qtyInput.value;

    const newLI = document.createElement('LI');
    newLI.innerText = `${qtyNumber} ${productName}`;

    list.append(newLI);
    input.value = '';
})

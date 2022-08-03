document.createElement('img');

const newImg = document.createElement('img');

console.dir(newImg);

document.body.appendChild(newImg);

const newH3 = document.createElement('h3');
// have to create the element

newH3.innerText = 'I am new!';
// insert text inside

document.body.appendChild(newH3);
// add that new text element to the page

const p = document.querySelector('p');

p.append('i am new text');
// appending works here

p.appendChild('doesn"t work here');

const newB = document.createElement('b');

newB.append('HI!')

p.prepend(newB);

const h2 = document.createElement('h2');
h2.append('are adorable');

const h1 = document.querySelector('h1')

h1.insertAdjacentElement('afterend', h2);

const h3 = document.createElement('h3');

h3.innerText('hey');

h1.after('h3')

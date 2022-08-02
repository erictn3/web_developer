document.querySelector('h1');

document.querySelector('p').innerText;

document.querySelector('p').innerText = 'lololol'
// 

document.querySelector('p').textContent;
// returns every piece of element for textContent including bold/underline/etc.

// returns every piece of text

// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText = 'I AM A LINK!!!'
// }

document.querySelector('h1').innerText = '<i>asdfasdf<i>'

document.querySelector('h1').innerHTML = '<i>asdfasdf<i>'
// we see the html elements included with the text

document.querySelector('span').innerHTML = 'Disgusting';
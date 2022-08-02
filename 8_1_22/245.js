document.querySelector('#banner')

document.querySelector('p');

document.querySelectorAll('p');

document.querySelector('a[title="Java"]');

// find by attribute and type

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}
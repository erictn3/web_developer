h1.style.color = 'green';

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'blue';
    link.style.textDecorationColor = 'magento';
    link.style.textDecorationStyle = 'wavy';
}
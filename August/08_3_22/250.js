const firstBold = document.querySelector('b');
firstBold.parentElement;

firstBold.parentElement.parentElement;

const paragraph = firstBold.parentElement;

paragraph.children

// [b,a,a,b,a,a,a]
paragraph.children[0];

const squareImg = document.querySelector('.square');
squareImg.parentElement;

squareImg.nextSibling; 